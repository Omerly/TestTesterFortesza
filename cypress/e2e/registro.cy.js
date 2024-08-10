describe('registro spec', () => {
  
  beforeEach(function(){
    cy.visit('https://staging.fortesza.com/');
    cy.get('#btn-register-1').click();
  })


  it ("Prueba E2E - Registrar inversionista exitoso", () => {

    cy.get('#input-email-register').type('emma43@gmail.com');
    cy.get('.country-selector-flag').click();
    cy.get('.mat-menu-content > :nth-child(44)').click();
    cy.get('.register-container').click();
    cy.get('#mat-input-2').type('530601907');
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#input-password-register').type('Emma2000.');
    cy.get('#btn-register-user').click();
    cy.get('.text-green > :nth-child(2)').should('be.visible');
    cy.get('.text-green > :nth-child(1) > .mat-icon').should('be.visible');
    cy.wait(5000);
    cy.url().should('eq', 'https://staging.fortesza.com/app/investor/dashboard/pre-kyc');
    
  })

  it ("Prueba E2E - Registrar inversionista email fail", () => {

    cy.get('#input-email-register').type('emma8@gmail.com');
    cy.get('.country-selector-flag').click();
    cy.get('.mat-menu-content > :nth-child(44)').click();
    cy.get('.register-container').click();
    cy.get('#mat-input-2').type('589554673');
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#input-password-register').type('Emma1932.');
    cy.get('#btn-register-user').click();
    cy.get('#toast-container > .ng-trigger').should('be.visible');
    cy.get('.toast-message').should('have.text', 'Hemos detectado que este correo ya se encuentra registrado, intenta con otro correo o inicia sesión');
    
  })

  it ("Prueba E2E - Registrar inversionista phone fail", () => {


    cy.get('#input-email-register').type('emma200@gmail.com');
    cy.get('.country-selector-flag').click();
    cy.get('.mat-menu-content > :nth-child(44)').click();
    cy.get('.register-container').click();
    cy.get('#mat-input-2').type('589554673');
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#input-password-register').type('Emma1932.');
    cy.get('#btn-register-user').click();
    cy.get('#toast-container > .ng-trigger').should('be.visible');
    cy.get('.toast-message').should('have.text', 'El número de teléfono ya está registrado en nuestro sistema. Por favor, ingresa otro número de teléfono o inicia sesión');

    
  })

  it ("Prueba E2E - Registrar inversionista pass fail", () => {

    cy.visit('https://staging.fortesza.com/');
    cy.get('#btn-register-1').click();
    cy.get('#input-email-register').type('emma16@gmail.com');
    cy.get('.country-selector-flag').click();
    cy.get('.mat-menu-content > :nth-child(44)').click();
    cy.get('.register-container').click();
    cy.get('#mat-input-2').type('589556852');
    cy.get('.mat-checkbox-inner-container').click();
    cy.get('#input-password-register').type('Emma19997');
    cy.get('#btn-register-user').click();
    cy.get('.text-red > :nth-child(2)').should('be.visible');
    cy.get('.text-red > :nth-child(1) > .mat-icon').should('be.visible');
    cy.get('.mat-form-field-invalid > .mat-form-field-wrapper > .mat-form-field-flex').should('be.visible');
    
  })
   
  
})
