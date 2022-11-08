///
import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";


Given("I navigate to the Website", () => {
    cy.visit("https://practicetestautomation.com/practice-test-login/");
    cy.wait(10000);
    //chromeWebSecurity: false;
});
When("I enter user name and password and clic", () => {
   // cy.contains("Sing in").click();
    
    cy.contains("username").click();
    cy.get("#username").clear();
    cy.get("#username").type("student");
    
    cy.get("#password").clear();
    cy.get("#password").type("Password123");
    cy.contains("Submit").click();
});
Then("Validate the title after login", () => {
    cy.title().should('eq', 'Logged In Successfully | Practice Test Automation');
    cy
});
