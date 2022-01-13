/// <reference types="Cypress"/>

describe('Locators test', ()=>{
    it('Should test the elements exists', ()=>{
        cy.visit('/index.php')

        cy.get('input') // by tag
        cy.get('#search_query_top') //by id
        cy.get('.search_query.form-control') // by className
        cy.get('[class="search_query form-control ac_input"]') // by exact className
        cy.get('[name="search_query"]'); //by name
        //cy.get('[data-cy="search_query"]') //dynamic content

    })
})