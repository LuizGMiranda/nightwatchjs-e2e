# Testes do GMv2
Testes desenvolvidos pela equipe de front com a finalidade de testar o fluxo e as funcionalidades.

## Tecnologias 
 - [NightWatchJS](nightwatchjs.org)
 - [NPM](https://docs.npmjs.com/cli/run-script)
 - [ENV2](https://www.npmjs.com/package/env2)

### Configuração
Duplicar o arquivo `exemplo.env`, e alterar o nome do arquivo para  `.env` e preencher as variáveis com as URL's.

#### Comandos
Comandos para rodar o projeto:
`npm run test // Rodar contra a maquina local (localhost:8080)`
`npm run test:desenv|test|pre|prd-1 // Rodar contra urls do ENV`