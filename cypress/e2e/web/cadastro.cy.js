/// <reference types="cypress" />

const { faker, Faker } = require("@faker-js/faker");



describe('Funcionalidade: Cadastro', () => {


    beforeEach(() => {
      cy.visit('cadastrarusuarios')
    });


    it.skip('Deve fazer cadastro usando (Usando data.now) ', () => {
      
      var email = 'edson'+Date.now()+'@email.com'

        cy.get('[data-testid="nome"]').clear().type('edsonuser')
        cy.get('[data-testid="email"]').clear().type(faker.internet.email())
        cy.get('[data-testid="password"]').clear().type('teste1232')
        cy.get('[data-testid="checkbox"]').check()
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')

    });


    it('Deve fazer cadastro usando (Usando Faker) ', () => {

        cy.CadastroUser(faker.person.fullName(), faker.internet.email(), faker.internet.password())

        cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')
    });
   
});