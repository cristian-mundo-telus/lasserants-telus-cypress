/// <reference types="Cypress"/>

const userInfo = {
    name: 'John',
    email: 'j@mail.coms'
}

const myPromie = new Promise((accept, reject)=>{
    setTimeout(() => {
        accept({
            type: 'message',
            result: 'ok'
        })
    }, 3000);
})

describe('Wrap Suite', () => {
    it('Should wrap button element with wrap' , () => {
        cy.visit('/index.php?id_product=7&controller=product')

        cy.get('.pb-right-column')
            .find('button')
            .then( button => {
                cy.wrap(button).click()
            })
    })

    it('should wrap a custom object', () => {
        cy.wrap(userInfo).then( object => {
            cy.wrap(object).its('name').should('eq', 'John');
        })
    })

    it.only('should wrap a custom promise', () => {
        cy.wrap(myPromie).its('result').should('eq', 'ok')
    })


})
