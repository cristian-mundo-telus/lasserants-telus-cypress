import { clickAddToCartId, clickToCheckout, setColorToProductId, setProductQuantityId } from "../../page-objects/add-item-to-cart";

class addToCart {
    addShirtToCart(){
        cy.get(setProductQuantityId)
            .clear().type('6')
        cy.get(setColorToProductId).click()
        cy.get(clickAddToCartId).click()
        cy.get(clickToCheckout).click()
    }
}

export const onAddToCart = new addToCart();
