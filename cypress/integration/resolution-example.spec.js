/// <reference types="Cypress"/>

const resolutions = [[500, 800], "iphone-x", "samsung-s10"];

describe("Resolution spec", () => {
  resolutions.forEach((size) => {
    it(
      `it should render a viewport of ${size}`,
    //   { retries: { openMode: 2 } },
      () => {
        if (size instanceof Array) {
          cy.viewport(size[0], size[1]);
        } else {
          cy.viewport(size);
        }

        cy.visit("/index.php");
        cy.get("#search_query_top");
      }
    );
  });
});
