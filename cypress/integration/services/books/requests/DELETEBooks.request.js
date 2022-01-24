//<reference types="cypress"/>
const payloadAddBook = require('../payloads/add-books.json')

function DELETEBook(idBook){
    return cy.request({
        method: 'DELETE',
        url: `Books/${idBook}`,
        failOnStatusCode: false        
    })
}

export {DELETEBook}