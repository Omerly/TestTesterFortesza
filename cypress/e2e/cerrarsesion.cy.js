describe('template spec', () => {
  
  
    it ("Prueba E2E - Cerrar Sesión", () => {
  
      cy.visit('https://staging.fortesza.com/');
      cy.get('#btn-sesion').click();
      cy.get('#txt-email-or-user').type("amilkar0417@gmail.com");
      cy.get('#txt-password').type("esFortesza");
      cy.get('#btn-sign-in-page').click();
      cy.wait(5000);
      cy.url().should('eq', 'https://staging.fortesza.com/app/investor/dashboard/home');
      cy.get('.button-user').click();
      cy.get('.mat-menu-content > :nth-child(3)').click();
      cy.wait(5000);
      cy.url().should('eq', 'https://staging.fortesza.com/');
      
    })
  
  })