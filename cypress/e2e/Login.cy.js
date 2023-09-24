const perfil = require('../fixtures/perfil.json')

describe('empty spec', () => {
  it('passes', () => {
    cy.visit(perfil.baseUrl)

    cy.get('.panel > .header > .authorization-link > a').click()
    cy.get('#email').type(perfil.email, {log: false})
    cy.get('#pass').type(perfil.senha, {log: false})
    cy.get('#send2').click()

  })
})