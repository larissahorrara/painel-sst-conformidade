# Configuração do repositório no GitHub

Passo a passo para publicar este projeto no GitHub como **repositório template**, com o painel acessível pelo GitHub Pages. Tudo é feito pela interface do site.

## 1. Criar o repositório e enviar os arquivos

1. No GitHub, clique em **New repository**.
2. Preencha:
   - **Repository name:** `painel-sst-conformidade`
   - **Description:** o texto da seção 2 abaixo
   - **Public**, para o GitHub Pages funcionar no plano gratuito
   - deixe desmarcadas as opções de criar README, `.gitignore` e licença, porque esses arquivos já estão no projeto
3. Clique em **Create repository** e, na página seguinte, em **uploading an existing file**.
4. Arraste o **conteúdo** da pasta `painel-sst-conformidade` (não a pasta em si) e clique em **Commit changes**.

> As pastas `.github` e os arquivos que começam com ponto podem não aparecer no explorador de arquivos. No Windows, ative "Itens ocultos" na guia **Exibir**; no Mac, use `Cmd + Shift + .`.

## 2. Menu "About" (lateral direita da página do repositório)

Clique na engrenagem ao lado de **About** e preencha:

**Description**

```text
Painel interativo de Saúde e Segurança do Trabalho (SST) e conformidade no padrão Power BI, com base de dados em modelo estrela, medidas DAX, insights e plano de ação. Dados fictícios.
```

**Website**

```text
https://larissahorrara.github.io/painel-sst-conformidade/
```

Marque **Use your GitHub Pages website** depois de concluir a seção 4.

**Topics** (digite um por vez e tecle Enter)

```text
seguranca-do-trabalho
saude-ocupacional
sst
gestao-de-riscos
compliance
power-bi
dax
dashboard
data-visualization
business-intelligence
chartjs
typescript
html
esocial
nr-1
portfolio
```

Em **Include in the home page**, deixe marcado só **Releases**, se for publicar versões.

## 3. Marcar como repositório template

1. Vá em **Settings › General**.
2. Logo abaixo do nome do repositório, marque **Template repository**.

A partir daí, aparece o botão **Use this template** na página do repositório. Quem usar o template recebe uma cópia limpa, sem o histórico de commits.

## 4. Publicar o painel no GitHub Pages

1. Vá em **Settings › Pages**.
2. Em **Build and deployment › Source**, escolha **Deploy from a branch**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
4. Aguarde alguns minutos. O painel fica disponível em `https://larissahorrara.github.io/painel-sst-conformidade/`.

O link **Abrir o painel**, no topo do README, passa a funcionar quando esta etapa termina.

## 5. Imagem de pré-visualização social

É a imagem que aparece quando o link do repositório é compartilhado no LinkedIn, WhatsApp e outras redes.

1. Vá em **Settings › General › Social preview** e clique em **Edit › Upload an image**.
2. Envie `docs/img/social-preview.png` (1280 × 640 pixels).

## 6. Licença (opcional)

O projeto não traz licença definida. Se quiser permitir reuso por terceiros, crie o arquivo pelo GitHub em **Add file › Create new file**, com o nome `LICENSE`, e use o botão **Choose a license template**.

Antes de escolher, confirme se a foto da capa pode ser redistribuída. Se ela veio de banco de imagens, a licença do código não cobre a imagem.

## 7. Conferência final

- [ ] O README aparece com a capa, os selos e as telas.
- [ ] O menu **About** mostra descrição, link e tópicos.
- [ ] O botão **Use this template** aparece.
- [ ] O link do GitHub Pages abre o painel.
- [ ] Em **Issues › New issue**, aparecem os formulários "Relatar um erro" e "Sugerir uma melhoria".
