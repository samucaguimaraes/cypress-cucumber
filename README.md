# cypress-cucumber
Exemplo de uso do Cypress com cucumber  aplicado ao BDD

#Iniciar um projeto npm
npm init --yes

#Instalar o Cypress
npm install -D cypress

#Executando o cypress para gerars as pastas padrões
npx cypress open

#Add scripts
"scripts": {
    "cypress:open": "./node_modules/.bin/cypress open",
    "cypress:run": "./node_modules/.bin/cypress open"
  },