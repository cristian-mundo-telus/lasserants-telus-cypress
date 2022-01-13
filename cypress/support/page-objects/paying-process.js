class PayAmount{
    makePaymentForOrder(){
        cy.get('.cheque').click()
    }
}

export const onPayment = new PayAmount();