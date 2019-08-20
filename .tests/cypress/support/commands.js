// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

Cypress.Commands.add('login', () => {
  cy.account()
  cy.get('#email').type('qwe@qwe.com').should('have.value', 'qwe@qwe.com')
  cy.get('#pass').type('Qweqwe_1').should('have.value', 'Qweqwe_1')
  cy.get('[data-testid=submit-login-button]').click()
})

Cypress.Commands.add('account', () => {
  cy.visit('/')
  cy.get('[data-testid=customer-account-link]').click()
  cy.url().should('include', '/customer/account/')
  cy.get('.login__form').should('be.visible')
})

Cypress.Commands.add('randomcategory', () => {
  cy.get('.mega-menu__link')
    .then((elements) => {
      cy.log(elements)
      elements[Math.floor(Math.random() * elements.length)]
        .click(elements)
    })
})

Cypress.Commands.add('gotoproductpage', () => {
  cy.get('[data-testid=catalog-grid-item__link]')
    .then((elements) => {
      cy.log(elements)
      elements[Math.floor(Math.random() * elements.length)]
        .click(elements)
    })
})

Cypress.Commands.add('addproducttocart', () => {
  cy.get('.breadcrumbs__item')

  cy.get('.size').find('.swatch__option').as('Size')
    .then((elements) => {
      cy.log(elements)
      elements[Math.floor(Math.random() * elements.length)]
        .click(elements)
    })

  cy.get('.color').find('.swatch__option')
    .then((elements) => {
      cy.log(elements)
      elements[Math.floor(Math.random() * elements.length)]
        .click(elements)
    })

  cy.get('#product-addtocart-button').first()
    .click()
})

Cypress.Commands.add('MassageSuccess', () => {
  cy.get('[data-ui-id=message-success]').should('be.visible')
    .log('product added to cart')
})

Cypress.Commands.add('next_page', () => {
  cy.get('[data-testid=pager-next-link]').click()
})

Cypress.Commands.add('previous_page', () => {
  cy.get('[data-testid=pager-prev-link]').click()
})

Cypress.Commands.add('submit_reg_form', () => {
  cy.get('[data-testid=create-account-button]').click()
  cy.get('.mage-error').should('be.visible')
})

Cypress.Commands.add('submit_login_form', () => {
  cy.get('[data-testid=submit-login-button]').click()
})

Cypress.Commands.add('select_first_menu', () => {
  cy.visit('/')
  cy.get('.mega-menu__link').first().click()
})
