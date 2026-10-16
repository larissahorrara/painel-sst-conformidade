/**
 * Extrai os dados do painel (index.html) para data/dados.json.
 *
 * Executa a camada de dados do relatório (seções 0 a 5B do TypeScript embutido)
 * fora do navegador, então os números são exatamente os exibidos no painel.
 * A data de referência é o dia em que o script roda.
 *
 * Uso (na raiz do repositório):  npm install  &&  npm run dados
 */
const fs = require('fs');
const path = require('path');
const ts = require('typescript');

const raiz = path.resolve(__dirname, '..');
const html = fs.readFileSync(path.join(raiz, 'index.html'), 'utf8');
const fonte = html.match(/<script type="text\/typescript" id="app-ts">([\s\S]*?)<\/script>/)[1];
const camadaDeDados = fonte.slice(0, fonte.indexOf('// 6. TEMA VISUAL DO RELATÓRIO'));
const js = ts.transpileModule(camadaDeDados, {
  compilerOptions: { target: ts.ScriptTarget.ES2020, module: ts.ModuleKind.None },
}).outputText;

const saida = new Function(js + `
  const porUnidade = {};
  for (const u of UNIDADES) {
    const d = CACHE.get(u.id), k = calcularKpis(d);
    porUnidade[u.id] = { d, k, metricas: construirMetricas(d, k), med: CACHE_MEDICINA.get(u.id) };
  }
  const dAll = CACHE.get('all'), kAll = calcularKpis(dAll), mAll = construirMetricas(dAll, kAll);
  return JSON.stringify({
    hoje: HOJE.toISOString().slice(0, 10), unidades: UNIDADES, setores: SETORES, categorias: CATEGORIAS_RISCO,
    turnos: TURNOS, dimensoes: DIMENSOES.map(x => x.nome), gruposAfastamento: GRUPOS_AFASTAMENTO,
    horasAno: HORAS_ANO_POR_COLABORADOR, porUnidade, kpisConsolidado: kAll, metricasConsolidado: mAll,
    alertasConsolidado: alertasCompletos('all', dAll, kAll, mAll), sesmtConfig: SESMT_UNIDADE,
  }, (chave, valor) => (typeof valor === 'string' && /^\\d{4}-\\d{2}-\\d{2}T/.test(valor)) ? valor.slice(0, 10) : valor, 2);
`)();

const destino = path.join(raiz, 'data', 'dados.json');
fs.writeFileSync(destino, saida);
const j = JSON.parse(saida);
console.log(`Dados extraídos em ${path.relative(raiz, destino)} (referência ${j.hoje}, ${j.unidades.length} unidades).`);
