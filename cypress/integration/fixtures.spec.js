/// <reference types="cypress"/>

import usersImport from "../fixtures/users.json";

describe('Fixtures suite', () => {
    it('should assert the names of the users', ()=>{
        cy.fixture('users').then((user)=>{
            expect(usersImport.goodUser.email).eq('cmundo@outlook.com')
        })
    })
})
