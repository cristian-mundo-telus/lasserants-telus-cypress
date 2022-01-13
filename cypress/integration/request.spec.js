/// <reference types="Cypress"/>

describe("Request suite", () => {
  it("should request an API", () => {
    cy.request("https://api.exchangerate-api.com/v4/latest/USD").then(
      (resp) => {
        cy.log(resp);
      }
    );
  });

  it("should request an asser over", () => {
    cy.request("GET", "https://api.exchangerate-api.com/v4/latest/USD")
      .its("body.base")
      .should("eq", "USD");
  });

  it.skip("should do a request to exchange api and assert over it with GET", () => {
    cy.request("POST", "https://api.exchangerate-api.com/v4/latest/USD", {
      base: "GTP",
    })
      .its("body.base")
      .should("eq", "GTP");
  });

  it.only("should intercep search filters", () => {
    cy.intercept(
      {
        query: {
          q: "shirt",
        },
      },
      {
        fixture: "/stubs/empty-response.json",
      }
    ).as("result");

    cy.visit("/index.php");
    cy.get("#search_query_top").type("shirt")
      .its("response.body")
      .should("not.contain", "Faded Short Sleeve");
  });
});

//npx cypress run --record --key the-key --parallel --group test-group --ci-build-id 1

