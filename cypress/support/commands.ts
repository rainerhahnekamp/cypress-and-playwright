import { LoginResponse } from "../plugins/playwright-login";

declare global {
  namespace Cypress {
    interface Chainable {
      login(): void;
    }
  }
}

Cypress.Commands.add("login", () => {
  cy.session("login", () => {
    cy.task<LoginResponse>("login", {
      ...Cypress.env("login"),
      url: Cypress.config().baseUrl,
    }).then(({ localStorage }) => {
      for (let key in localStorage) {
        window.localStorage.setItem(key, localStorage[key]);
      }
    });
  });
});
