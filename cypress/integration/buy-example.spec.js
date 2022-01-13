/// <reference types="Cypress"/>

describe('Locators test', ()=>{
    it('it should add to cart and buy it', ()=>{
        cy.visit('/index.php')
        cy.get('#search_query_top')
            .type("shirt{enter}")

        cy.get('.product_img_link > .replace-2x').click() //:nth-child(1)

        cy.get('#quantity_wanted')
            .clear().type('6')

        cy.get('#color_14').click()

        cy.get('.exclusive > span').click()

        cy.get('.button-medium > span').click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('#email').type('cmundo@mail.com')
        cy.get('#passwd').type('camote99')
        cy.get('#SubmitLogin > span').click()

        cy.get('.cart_navigation > .button > span').click()

        cy.get('#cgv').click()
        cy.get('.cart_navigation > .button > span').click()

        cy.get('.cheque').click()
        cy.get('#cart_navigation > .button > span').click()

        cy.get('[title="View my shopping cart"]').click()

        cy.get('.alert')
    })
})