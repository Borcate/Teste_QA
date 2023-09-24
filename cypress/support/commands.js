Cypress.Commands.add('pedidos_produtos', (tamanho, cor, quant) => {

    cy.get('#option-label-size-157-item-171' + tamanho).click()
    cy.get('.swatch-attribute.color > .swatch-attribute-options' + cor).click()
    cy.get('#qty').clear().type(quant)
    cy.get('#product-addtocart-button').click()
    cy.get('.message-success').should('contain', 'You added Breathe-Easy Tank to your shopping cart.')
});