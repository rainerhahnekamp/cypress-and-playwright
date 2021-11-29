describe("Login", () => {
  beforeEach(() => {
    cy.login();
    cy.visit("");
  });
  it.skip("should not work because of same-origin violation", () => {
    cy.visit("");
    cy.get("button").click();
    cy.get("#logonIdentifier").type("johndoe");
    cy.get("#password").type("Fupu7043");
    cy.get("button#next").click();
    cy.intercept("GET", Cypress.config().baseUrl || "").as("baseUrl");
    cy.wait("@baseUrl");
    cy.get("p").should("contain.text", "Welcome");
  });
  it("should login", () => {
    cy.get("p").should("contain.text", "Welcome");
  });

  it("should also be logged in", () => {
    cy.get("p").should("contain.text", "Welcome");
  });
});
