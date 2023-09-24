var faker = require('faker');

class Finalizar_Compra {

    Finalizacao_de_Compra() {
        const THREE_SECONDS_IN_MS = 3000
        //cadastrar usuário
        var firstfaker = faker.name.firstName()
        var lastfaker = faker.name.lastName()
        var emailfaker = faker.internet.email(firstfaker + lastfaker)
        var passwordfaker = faker.internet.password()
        var firstfaker2 = faker.name.firstName()
        var lastfaker2 = faker.name.lastName()
        var companyfaker = faker.company.companyName()
        var addressfaker = faker.address.streetAddress()
        var addressfaker2 = faker.address.streetAddress()
        var addressfaker3 = faker.address.secondaryAddress()
        var cityfaker = faker.address.city()
        var codefaker = faker.address.zipCode()
        var fonefaker = faker.phone.phoneNumber()

        cy.clock()
        cy.get('.panel > .header > :nth-child(3) > #id4laPYUFE').click()
        cy.get('#firstname').type(firstfaker)
        cy.get('#lastname').type(lastfaker)
        cy.get('input[type="checkbox"]').check()
        cy.get('#email_address').type(emailfaker)
        cy.get('#password').type(passwordfaker)
        cy.get('#password-confirmation').type(passwordfaker)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success > div').should('contain', 'Thank you for registering with Main Website Store.')
        //selecionar produtos
        cy.get('#ui-id-4').click()
        cy.get(':nth-child(2) > .product-item-info > .product-item-photo > .product-image-container > .product-image-wrapper > .product-image-photo').click()
        cy.get('#option-label-size-157-item-171').click()
        cy.get('#option-label-color-93-item-60').click()
        cy.get('#qty').clear().type(3)
        cy.get('#product-addtocart-button').click()
        cy.get('.message-success > div').should('contain', 'You added Breathe-Easy Tank to your shopping cart.')
        //finalizar compra
        cy.get('.showcart > .counter').click()
        cy.get('#top-cart-btn-checkout').click()
        cy.tick(3000)
        //preenher endereço de entrega
        //cy.get('#QCS94C4').clear().type(firstfaker2)
       //cy.get('#RKH16I9').clear().type(lastfaker2)
        cy.get('#VUHDMJO').type(companyfaker)
        cy.get('#TKFRA7V').type(addressfaker)
        cy.get('#CPFI5FL').type(addressfaker2)
        cy.get('#REI89RK').type(addressfaker3)
        cy.get('#Q7YXHKQ').click().type('Brazil{enter}')
        cy.get('#YSEUO6M').click().type('Paraná{enter}')
        cy.get('#PVGF8OQ').type(cityfaker)
        cy.get('#NA8GDQK').type(codefaker)
        cy.get('#VNPHWF0').type(fonefaker)
        cy.get('.button').click()
        //finalizar
        cy.get('.payment-method-content > :nth-child(4) > div.primary > .action').click()
        //Validação do pedido realizado
        cy.get('.base').should('contain', 'Thank you for your purchase!')
        //Lista de pedido
        //Detalhe do pedido
        cy.get('.order-number > strong').click()
    }


}
export default new Finalizar_Compra()