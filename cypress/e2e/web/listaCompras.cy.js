/// <reference types="cypress" />

describe('Funcionalidade: Lista de compras', () => {

    beforeEach(() => {
        cy.login('fulano@qa.com', 'teste')
    });


    it('Validar entrada na lista de compras', () => {
        cy.visit('minhaListaDeProdutos')
        cy.get('h1').should('contain', 'Lista de Compras')

        
    });
});