/// <reference types = "cypress"/>
const expectedcurrency = "SAR";
const expectedAttribute = "lang";
const expectedlanagauge = "en";
describe('Aspire Test Cases', () => {
  it('check the currency is SAR', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('[data-testid="Header__CurrencySelector"]').invoke('text').should('include', expectedcurrency)
  });
  it('check the lanaguage of the website', () => {
    cy.visit('https://www.almosafer.com/en')
    cy.get('.cta__saudi').click()
    cy.get('html').should('have.attr', expectedAttribute, expectedlanagauge)
  });
})
