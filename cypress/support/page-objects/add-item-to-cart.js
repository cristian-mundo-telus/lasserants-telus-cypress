class addToCart {
    addShirtToCart(){
        cy.get('#quantity_wanted')
            .clear().type('6')
        cy.get('#color_14').click()
        cy.get('.exclusive > span').click()
        cy.get('.button-medium > span').click()
    }
}

export const onAddToCart = new addToCart();

export const setProductQuantityId = '#quantity_wanted'
export const setColorToProductId = '#color_14'
export const clickAddToCartId = '.exclusive > span'
export const clickToCheckout = '.button-medium > span'