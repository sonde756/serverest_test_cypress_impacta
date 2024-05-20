/// <reference types="cypress" />



describe('Funcionalidade: Login', () => {

    before(() => {
        //Antes de todos os testes
        // Ex.: Subir servidor
    });

    beforeEach(() => {
      cy.visit('login')
    });


    after(() => {
        //Fazer algo depois de todos os testes
        //Ex.: Desligar server
    });

    afterEach(() => {
        //Fazer algo depois de CADA cenário
        //  cy.screenshot()
    });

   
    
    it('Deve fazer login com sucesso', () => {

        cy.get('[data-testid="email"]').clear().type('fulano@qa.com')
        cy.get('[data-testid="senha"]').clear().type('teste')
        cy.get('[data-testid="entrar"]').click()

        cy.get('h1').should('contain', 'Bem Vindo')

    });

    it('Deve validar usuario invalido', () => {

        cy.get('[data-testid="email"]').clear().type('fulan12o@qa.com')
        cy.get('[data-testid="senha"]').clear().type('teste')
        cy.get('[data-testid="entrar"]').click()

        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')

    });
});