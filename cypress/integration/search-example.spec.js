/// <reference types="Cypress"/>

describe('Locators test', ()=>{
    it('it should print something to the search input', ()=>{
        cy.visit('/index.php')

        // cy.get('#search_query_top').type('Jeans')
        // cy.get('#search_query_top').clear().type('Pants')

        cy.get('#search_query_top')
            .type("Hello world")
            .invoke('attr', 'value')
            .should('equal', 'Hello world')
 

    })
})