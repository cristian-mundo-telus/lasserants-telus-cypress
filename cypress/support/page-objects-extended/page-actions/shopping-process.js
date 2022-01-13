import { clickNextStep, agreeToTermsAndConditionsId } from '../../../fixtures/proceed.json'

class shoppingProcess {
    continueShoppingProcessAfterLoginIn(){
        cy.get(clickNextStep).click()
        cy.get(agreeToTermsAndConditionsId).click()
        cy.get(clickNextStep).click()
    }
}

export const onShoppingProcess = new shoppingProcess();