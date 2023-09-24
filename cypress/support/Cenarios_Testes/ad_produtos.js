class ad_produtos_carrinho {
    
ad_produtos(){
    cy.get(':nth-child(2) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#option-label-size-157-item-171').click()
    cy.get('#option-label-color-93-item-60').click()
    cy.get('#qty').clear().type(2)
    cy.get('#product-addtocart-button').click()
    cy.get('.message-success').should('contain', 'You added Breathe-Easy Tank to your shopping cart.')
}

pagina_de_produtos(){
    cy.get('#ui-id-5').click()
    cy.get('.categories-menu > :nth-child(4) > :nth-child(1) > a').click()
    cy.get('#product-item-info_745 > .photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
    cy.get('#option-label-size-157-item-182').click()
    cy.get('#option-label-color-93-item-57').click()
    cy.get('#qty').clear().type(2)
    cy.get('#product-addtocart-button').click()
}

busca(){
    cy.get('#search').click().type('WS08{enter}')
    cy.get('.product-image-photo').click()
    cy.get('#option-label-size-157-item-174').click()
    cy.get('#option-label-color-93-item-58').click()
    cy.get('#qty').clear().type(10)
    cy.get('#product-addtocart-button').click()
    cy.get('.message-success > div').should('contain', 'You added Breathe-Easy Tank to your shopping cart.')
}

}
export default new ad_produtos_carrinho()