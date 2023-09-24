## Documentação para o projeto de testes:

- Cadastro de usuário
- Login
- Adicionar produto ao carrinho
    - Página de produto
    - Busca
- Finalização de compra
    - Validação do pedido realizado
    - Lista de pedido
    - Detalhe do pedido

# Pré-requisitos

Os seguintes sistemas foram instalados.(em setembro de 2023)
- [git](https://git-scm.com/) (estou usando a versão `git version 2.40.0.windows.1`)
- [Node.js](https://nodejs.org/en/) (estou usando a versão `v18.16.0`)
- npm (estou usando a versão `9.8.0` enquanto realizo os testes)
- [Google Chrome](https://www.google.com/intl/pt_br/chrome/) (estou usando a versão `116.0.5845.188 (Official Build) (x86_64)`)
- [Visual Studio Code](https://code.visualstudio.com/) (estou usando a versão `1.82.2` enquanto realizo os testes) ou alguma outra IDE de sua preferência
- [Faker](https://www.npmjs.com/package/faker) (estou usando a versão `npm i faker@5.5.3` enquanto realizo os testes)
>
> **Obs. 1:** Ao instalar o Node.js o npm é instalado junto. 🎉
>
> **Obs. 2:** Para verificar as versões do git, Node.js e npm instaladas em seu computador, execute o comando `git --version && node --version && npm --version` no seu terminal de linha de comando.

## Instalação e inicialização do [Cypress](https://cypress.io) 🌲
1. Executar o comando `npm install cypress --save-dev` (ou `npm i cypress@13.2.0 -D` para a versão curta) > para versão utilizada durante os testes
2. Executar o comando `npx cypress open` para abrir o Cypress pela primeira vez

## Npm Scripts 
    "npx cypress open" -> Para abrir o Test Runner e executar o novo teste em modo interativo
    "npx cypress run" -> Para executar o novo teste em modo headless

    