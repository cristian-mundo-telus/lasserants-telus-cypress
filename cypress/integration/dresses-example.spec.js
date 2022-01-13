/// <reference types="Cypress"/>

const resolutions = [[1366, 768], "iphone-8", "samsung-note9"];

describe("Search dresses example", () => {
  resolutions.forEach((size) => {
    it(
      `should search and then count number of dresses, viewport ${size}`,
      { retries: { openMode: 3, runMode: 2 } },
      () => {
        if (size instanceof Array) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.visit("./index.php");
        cy.get("#search_query_top").type("dresses{enter}");

        cy.get(".product_list > li").should("have.length", 7);
      }
    );
  });
});
