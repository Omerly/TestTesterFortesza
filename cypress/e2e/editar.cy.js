describe('template spec', () => {

    beforeEach(function(){
      cy.visit('https://staging.fortesza.com/');
      cy.get('#btn-sesion').click();
      cy.get('#txt-email-or-user').type("amilkar0417@gmail.com");
      cy.get('#txt-password').type("esFortesza");
      cy.get('#btn-sign-in-page').click();
      cy.wait(5000);
      cy.url().should('eq', 'https://staging.fortesza.com/app/investor/dashboard/home');
      cy.get('.button-user').click();
      cy.get('[routerlink="/dashboard/user-profile"]').click();
      cy.wait(5000);
      cy.url().should('eq', 'https://staging.fortesza.com/app/investor/dashboard/user-profile');
    })

    it ("Prueba E2E - Editar Telefono", () => {
  
      cy.get('.mat-form-field.ng-tns-c21-19 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator').click();
      cy.get('#mat-input-0').type('+507 6455-1006');
      cy.get('div.ng-touched > :nth-child(2) > .btn-update-password').click();   
    
    }
    )
  
    it ("Prueba E2E - Editar Telefono Fail", () => {
    
      cy.get('.mat-form-field.ng-tns-c21-19 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-suffix > .mat-focus-indicator').click();
      cy.get('#mat-input-0').clear(); 
      cy.get('#mat-input-0').type('051');
      cy.get('div.ng-valid > :nth-child(2) > .btn-update-password > .mat-button-wrapper').click();
      cy.get('#toast-container > .ng-trigger').should('be.visible');
    
    }
    )
  

  
  })