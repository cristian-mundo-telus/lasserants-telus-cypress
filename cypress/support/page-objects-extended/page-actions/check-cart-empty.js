import { checkMessageFromAlert, clickNextStepId } from "../../page-objects/check-cart-empty";

class Cart {
    checkCartIsEmpty(){
        cy.get(clickNextStepId).click()
        cy.get('[title="View my shopping cart"]').click()
        cy.get(checkMessageFromAlert)
    }
}

export const onCart = new Cart();