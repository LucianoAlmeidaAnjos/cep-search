# CEP Search App

   Aplicação para busca de endereços por CEP utilizando React e axios.

   ## Requisitos

   - Node.js
   - npm
   - Docker (opcional)

   ## Instalação

   1. Clone o repositório:
      git clone https://github.com/LucianoAlmeidaAnjos/cep-search
      cd cep-search
      

   2. Instale as dependências:
      npm install
      

   3. Inicie a aplicação:
      npm start
      

   4. Inicie o json-server:
      npm run server
      

   ## Testes

   1. Instale o Cypress:
      npm install cypress --save-dev
      

   2. Execute o Cypress:
      npx cypress open

   3. Escolha "E2E Testing" na interface do Cypress

      Na interface do Cypress, selecione 'cepSearch.cy.js' para executar os testes
      

   ## Docker

   1. Construa a imagem Docker:
      docker build -t cep-search-app .
      

   2. Execute o container:
      docker run -p 3000:3000 cep-search-app
      

   ## Estrutura de Pastas/Arquivos

   - `src/`: Contém os arquivos do código-fonte do React.
     - `components/`: Componentes reutilizáveis.
     - `App.tsx`: Componente principal da aplicação.
     - `index.tsx`: Ponto de entrada da aplicação.

   - `public/`: Arquivos estáticos públicos.
   - `cypress/`: Testes end-to-end utilizando Cypress.
   - `db.json`: Banco de dados JSON para o json-server.
   - `Dockerfile`: Arquivo para criação da imagem Docker.
   - `README.md`: Instruções detalhadas sobre configuração, execução e teste da aplicação.
