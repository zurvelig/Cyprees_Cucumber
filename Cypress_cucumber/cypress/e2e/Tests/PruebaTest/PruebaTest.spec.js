///
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I navigate to the Website", () => {
    cy.visit("http://automationpractice.com/");
    cy.wait(10000);
    //chromeWebSecurity: false;
});
When("I enter user name and password and clic", () => {
   // cy.contains("Sing in").click();
    cy.contains("Sign in").click();
    cy.get("#email").clear();
    cy.get("#email").type("qatube@yopmail.com");
    
    cy.get("#passwd").clear();
    cy.get("#passwd").type("12345");
    cy.get("#SubmitLogin").click();
});
Then("Validate the title after login", () => {
    cy.title().should('eq', 'My account - My Store');
});