/// <reference types="cypress" />



describe('Funcionalidade: Cadastro', () => {


    beforeEach(() => {
      cy.visit('cadastrarusuarios')
    });


    it('Deve fazer cadastro ', () => {
        cy.get('[data-testid="nome"]').clear().type('edsonww2rfa2el')
        cy.get('[data-testid="email"]').clear().type('edswon212@email.com')
        cy.get('[data-testid="password"]').clear().type('teste1232')
        cy.get('[data-testid="checkbox"]').check()
        cy.get('[data-testid="cadastrar"]').click()
        cy.get('.alert-link').should('contain', 'Cadastro realizado com sucesso')

    });
   
});