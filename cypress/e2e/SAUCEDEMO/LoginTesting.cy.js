/// <reference types="cypress" />
describe("Saucedemo Testing",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
    })
    it('successfully Login with valid credentials', () => {
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("include","https://www.saucedemo.com/inventory.html")
        cy.contains("Sauce Labs Backpack").should("be.visible")
    });
    it('failed login with wrong Password', () => {
        cy.get("#user-name").type("standard_user123")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.get("h3[data-test='error']").should("be.visible")
    });
    it('failed login with empty Password', () => {
        cy.get("#user-name").type("standard_user123")
        cy.get("#login-button").click()
        cy.contains("Epic sadface: Password is required").should("be.visible")
    });
    it('failed login with empty Username & Password', () => {
        cy.get("#login-button").click()
        cy.contains("Epic sadface: Username is required").should("be.visible")
    });
})