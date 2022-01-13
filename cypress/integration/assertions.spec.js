/// <reference types="Cypress"/>

describe('Test String', ()=>{

    let String = 'hello world';

    it('Should validate a String', ()=>{
        expect(String).to.be.string
    })
})