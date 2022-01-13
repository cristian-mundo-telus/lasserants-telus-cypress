/// <reference types="Cypress"/>

describe('Snapshot suite', () => {
    it('should match the DOM', () => {
        cy.visit('/index.php')
            .then(()=>{
                cy.get('.tab-content').toMatchImageSnapshot();
            })
    })
})
