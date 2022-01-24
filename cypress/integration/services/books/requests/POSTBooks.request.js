//<reference types="cypress"/>
const payloadAddBook = require('../payloads/add-books.json')

function addBooks(){
    return cy.request({
        method: 'POST',
        url: 'Books',
        failOnStatusCode: false,
        body: payloadAddBook
    })
}

export {addBooks}