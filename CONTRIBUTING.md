# Como contribuir

Obrigada pelo interesse em melhorar o Painel de SST e Conformidade.

## Antes de começar

- Todos os dados do projeto são **fictícios**. Não envie dados reais de colaboradores, de saúde ou de empresas em issues, commits ou pull requests.
- Para relatar um erro ou sugerir uma melhoria, use os formulários da aba **Issues**.

## Fluxo de trabalho

1. Crie uma *branch* a partir da `main` com um nome descritivo, por exemplo `melhoria/pagina-cipa` ou `correcao/filtro-setor`.
2. Faça as alterações e teste o painel abrindo `index.html` no navegador.
3. Se a lógica de dados mudou, regenere a base seguindo a seção "Regenerar a base a partir do painel" do README.
4. Atualize o `README.md` e o `CHANGELOG.md` quando a mudança afetar o uso, a base ou as regras de negócio.
5. Abra o *pull request* preenchendo o modelo.

## Padrões do projeto

- **Idioma:** textos da interface, comentários e documentação em português do Brasil.
- **Código:** TypeScript dentro do `index.html`, verificado no modo estrito (`strict: true`). Nomes de variáveis e funções em português, no mesmo estilo do código existente.
- **Base de dados:** colunas em `snake_case` sem acento, percentuais em fração (0,9 = 90%), prefixo `d` para dimensões e `f` para fatos.
- **Cores:** siga a paleta temática descrita no README.
- **Normas:** ao citar uma NR ou um evento do eSocial, confira a versão oficial vigente.
