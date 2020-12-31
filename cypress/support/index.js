Cypress.Commands.add('loadUsers',
() => {
  cy.fixture('users')
  .as('users')
})