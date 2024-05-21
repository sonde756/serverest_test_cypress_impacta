/// <reference types="cypress" />



describe('Funcionalidade: Login', () => {

    before(() => {
        //Antes de todos os testes
        // Ex.: Subir servidor
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

        cy.login('fulano@qa.com','teste')
        cy.get('h1').should('contain', 'Bem Vindo')
        
    });

    it('Deve validar usuario invalido', () => {

        cy.login('fulano12@qa.com','teste')
        cy.get('.alert').should('contain', 'Email e/ou senha inválidos')

    });
});