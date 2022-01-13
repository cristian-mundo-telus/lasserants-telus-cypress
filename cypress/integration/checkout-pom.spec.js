/// <reference types="Cypress"/>

//import { onAddToCart } from '../support/page-objects/add-item-to-cart'
//import { onCart } from '../support/page-objects/check-cart-empty'
import { onLoginForm } from '../support/page-objects/login-form'
import { onPayment } from '../support/page-objects/paying-process'
// import { onSearch } from '../support/page-objects/search'
//import { onShoppingProcess } from '../support/page-objects/shopping-process'

//I USE A COMBINE OF EXTENDES AND FIXTURES HERE
import { onSearch } from "../support/page-objects-extended/page-actions/search-actions"; 
import { onAddToCart } from '../support/page-objects-extended/page-actions/add-to-cart-actions';
import { onShoppingProcess } from '../support/page-objects-extended/page-actions/shopping-process';
import { onCart } from '../support/page-objects-extended/page-actions/check-cart-empty';


//FIXTURE
import { clickNextStep } from '../fixtures/proceed.json'



describe('Locators test', ()=>{
    it('it should add to cart and buy it', ()=>{
        cy.visit('/index.php')

        // Search for shirts 
        onSearch.searchAndClickFirstItem('shirt')

        onAddToCart.addShirtToCart()

        cy.get(clickNextStep).click()

        //Login into the platform
        onLoginForm.loginWithUserAndPassword('cmundo@mail.com','camote99')

        onShoppingProcess.continueShoppingProcessAfterLoginIn();

        onPayment.makePaymentForOrder();

        onCart.checkCartIsEmpty();
    })
})