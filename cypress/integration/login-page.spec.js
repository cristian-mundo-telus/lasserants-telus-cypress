/// <reference types="Cypress"/>

describe("Login Suit", () => {
  it("Shoul login into the page", () => {
    cy.visit("/index.php?controller=authentication&back=my-account");
    cy.get("#email").type("cris.mundo@outlook.com");
    cy.get("#passwd").type("hola");
    cy.get("#SubmitLogin").click();
    cy.wait(6000);
    //incorrect password then
    cy.get(".lost_password > a").click();

    //find password by email
    cy.get("#email").type("cris.mundo@outlook.com");
    cy.get(".submit > button").click();
  });
});
