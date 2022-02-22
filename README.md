This a cypress project which integrates Playwright to overcome the limitation of switching super domains.

This project uses an internal OAuth2 Server. You have to setup your own one and also modify `playwright-login.spec.ts` to meet your requirements.

The credentials are located in `cypress.json`.

Other than that, `login.spec.ts` should run two tests where it is using Playwright as a task to do the login and caches that data via `cy.session`.

You find a recording of the talk on https://youtu.be/8cqax_iGW84
