# Aplicação Backend com TypeScript

Este é um projeto básico de backend em TypeScript, com rotas `GET` e `POST`, desenvolvido para introdução ao uso de TypeScript no backend.

## Tecnologias

- **Node.js**
- **TypeScript**
- **Express**

## Funcionalidades

- **Rota GET** - Retorna uma mensagem de boas-vindas.
- **Rota POST** - Recebe e retorna dados enviados pelo corpo da requisição.

## Estrutura do Projeto

```plaintext
.
├── src
│   ├── routes
│   │   └── index.ts           # Configuração das rotas
│   ├── controllers
│   │   └── exampleController.ts # Controladores das rotas
│   └── app.ts                 # Configuração do Express e middlewares
├── .env                       # Variáveis de ambiente
├── tsconfig.json              # Configuração do TypeScript
└── README.md                  # Documentação
