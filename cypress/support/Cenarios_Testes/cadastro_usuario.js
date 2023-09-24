var faker = require('faker');

class Usuarios {

    novo_usuario(){
        var firstfaker = faker.name.firstName()
        var lastfaker = faker.name.lastName()
        var emailfaker = faker.internet.email(firstfaker + lastfaker)
        var passwordfaker = faker.internet.password()

        cy.get('.panel > .header > :nth-child(3) > #id53F7AJDW').click()
        cy.get('#firstname').type(firstfaker)
        cy.get('#lastname').type(lastfaker)
        cy.get('input[type="checkbox"]').check()
        cy.get('#email_address').type(emailfaker)
        cy.get('#password').type(passwordfaker)
        cy.get('#password-confirmation').type(passwordfaker)
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-success > div').should('contain', 'Thank you for registering with Main Website Store.')
    }

    campos_obrigatorios(){
        cy.get('.panel > .header > :nth-child(3) > #id8Ejzm0XW').click()
        cy.get('input[type="checkbox"]').check()
        cy.get('#form-validate > .actions-toolbar > div.primary > .action').click()
        cy.get('.message-error').should('contain', 'Invalid Form Key. Please refresh the page.')
    }

}
export default new Usuarios()