describe('Home', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200');
    cy.injectAxe();
  });

  it('Should load the correct URL',  () => {
    cy.url().should('eq', 'http://localhost:4200/home');
  });

  it('Should not have detected a11y violations on load', () => {
    cy.checkA11y();
  });

/*
  it('Should not have detected a11y violations on main area', () => {
    cy.checkA11y(
      '.layout__main', {
        runOnly: {
          type: 'tag',
          values: ['wcag2a']
        }
      }
    );
  });

  it('Should not have detected a11y violations after searching content', () => {
    cy.get('input').type('Hello, World');
    // cy.get('button').click();
    cy.checkA11y();
  });
  */
});
