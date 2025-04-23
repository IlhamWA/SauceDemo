/// <reference types="cypress" />
describe("Saucedemo Testing",()=>{
    beforeEach(()=>{
        cy.visit("https://www.saucedemo.com/")
        cy.get("#user-name").type("standard_user")
        cy.get("#password").type("secret_sauce")
        cy.get("#login-button").click()
        cy.url().should("include","https://www.saucedemo.com/inventory.html")
    })
    it('successfully Add to cart', () => {
        cy.get("#add-to-cart-sauce-labs-backpack").click()
        cy.get(".shopping_cart_link").click()
        cy.get(".cart_item_label").should("be.visible")
    });
    
})