describe('CEP Search', () => {
    it('should search for an address by CEP', () => {
      cy.visit('/');
      cy.get('input').type('01001000');
      cy.get('button').click();
      cy.contains('Logradouro').should('be.visible');
      cy.contains('Bairro').should('be.visible');
      cy.contains('Cidade').should('be.visible');
      cy.contains('Estado').should('be.visible');
    });
  });