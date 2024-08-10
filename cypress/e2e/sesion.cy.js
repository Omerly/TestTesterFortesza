describe('template spec', () => {

  beforeEach(function(){
    cy.visit('https://staging.fortesza.com/');
  })

  it ("Prueba E2E - Inicio de Sesión Exitoso", () => {

    cy.get('#btn-sesion').click();
    cy.get('#txt-email-or-user').type("amilkar0417@gmail.com");
    cy.get('#txt-password').type("esFortesza");
    cy.get('#btn-sign-in-page').click();
    cy.wait(5000);
    cy.url().should('eq', 'https://staging.fortesza.com/app/investor/dashboard/home');
}
)

it ("Prueba E2E - Inicio de Sesión Usuario Incorrecto Pass", () => {

  cy.get('#btn-sesion').click();
  cy.get('#txt-email-or-user').type("amilkar0417@gmail.com");
  cy.get('#txt-password').type("estoaquello");
  cy.get('#btn-sign-in-page').click();
  cy.get('#toast-container > .ng-trigger').should('be.visible');
  cy.get('.toast-message').should('have.text', 'Contraseña o correo son incorrectos');


}
)

it ("Prueba E2E - Inicio de Sesión Usuario Incorrecto email", () => {

  cy.get('#btn-sesion').click();
  cy.get('#txt-email-or-user').type("hajahajaha17@gmail.com");
  cy.get('#txt-password').type("esFortesza");
  cy.get('#btn-sign-in-page').click();
  cy.get('#toast-container > .ng-trigger').should('be.visible');
  cy.get('.toast-message').should('have.text', 'Contraseña o correo son incorrectos');


}
)

})