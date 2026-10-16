# Histórico de versões

Todas as mudanças relevantes do projeto. O formato segue a ideia do [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

## [1.0.0] · 16/10/2026

Primeira versão publicada, que reúne as etapas de desenvolvimento abaixo.

### Painel (`index.html`)

- **Etapa 1.** Painel em cinco abas com dados fictícios de quatro unidades (Brasília, São Paulo, Goiânia e Belo Horizonte) e filtro global por unidade.
- **Etapa 2.** Paleta temática por assunto: Segurança do Trabalho, Acidentes, Saúde Mental e Normativo.
- **Etapa 3.** Visual no padrão de relatório Power BI: cartões de KPI com minigráficos, medidores, matrizes com formatação condicional, filtragem cruzada, modo de foco e exportação em CSV.
- **Etapa 4.** Página de Engenharia e Medicina do Trabalho (SESMT, ASOs, exames, afastamentos, LTCAT, eventos de SST no eSocial e PPP). PGR da obra (NR-18) na governança e LTCAT referenciado à Lei 8.213/91 e à NR-15.
- **Etapa 5.** Interface de relatório: página de tamanho fixo com zoom, barra de ações, painéis de páginas e de filtros recolhíveis, segmentações em lista suspensa, pesquisa e números no padrão brasileiro.
- **Etapa 6.** Capa com foto, número de destaque e índice das páginas.

### Base de dados (`data/`)

- Base em modelo estrela com 20 tabelas, aba de metas, aba de conferência contra o painel e dicionário com 132 colunas.
- Exportação das tabelas em CSV.
- Scripts para regenerar a base a partir do painel.

### Documentação

- README com insights da análise, plano de ação, medidas DAX, regras de negócio e glossário.
- Guia de configuração do repositório no GitHub.
