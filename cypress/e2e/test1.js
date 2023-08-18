/// <reference types="Cypress" /> 

describe('automation test store', () => {
    it('sign up test', () => {
        cy.visit ("https://automationteststore.com/")
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#accountFrm > fieldset > .btn').click()
        cy.get('#AccountFrm_firstname').type("Raghad")
        cy.get('#AccountFrm_lastname').type("Narmouq")
        cy.get('#AccountFrm_email').type("raghadnarmoq@gmail.com")
        cy.get('#AccountFrm_address_1').type('Amman')
        cy.get('#AccountFrm_country_id').select("Jordan")
        cy.get('#AccountFrm_zone_id').select("'Amman")
        cy.get('#AccountFrm_city').type("Amman")
        cy.get('#AccountFrm_postcode').type(41370)
        cy.get('#AccountFrm_loginname').type("raghadnarmouq")
        cy.get('#AccountFrm_password').type("raghadnarmouq")
        cy.get('#AccountFrm_confirm').type("raghadnarmouq")
        cy.get('#AccountFrm_agree').click()
        cy.get('.col-md-2 > .btn').click()
    });
    it('log in test', () => {
        cy.visit ("https://automationteststore.com/")
        cy.get('#customer_menu_top > li > a').click()
        cy.get('#loginFrm_loginname').type("raghadnarmouq")
        cy.get('#loginFrm_password').type("raghadnarmouq")
        cy.get('#loginFrm > fieldset > .btn').click()
    });
});


