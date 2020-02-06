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

  it('Should not have detected a11y violations following the wcag2a', () => {
    // https://www.deque.com/axe/axe-for-web/documentation/api-documentation/
    cy.checkA11y(null, {
      runOnly: {
        type: 'tag',
        values: ['wcag2a']
      }
    });
  });

  it('Should not have detected color-contrast a11y violation', () => {
    // https://github.com/dequelabs/axe-core/blob/develop/doc/rule-descriptions.md
    cy.checkA11y(null, {
      runOnly: {
        type: 'rule',
        values: ['color-contrast']
      }
    });
  });

  it('Should not have detected some specific a11y violations', () => {
    cy.checkA11y(null, {
      rules: {
        'color-contrast': { enabled: false },
        label: { enabled: false },
        region: { enabled: false },
        'page-has-heading-one': { enabled: false },
        'link-name': { enabled: false },
        'landmark-one-main': { enabled: false },
        bypass: { enabled: false }
      }
    });
  });

});
