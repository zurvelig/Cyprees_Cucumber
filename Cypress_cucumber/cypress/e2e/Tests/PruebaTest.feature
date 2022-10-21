    Feature: validate that the browserstack page can be opened

    Background:
        Given I navigate to the Website
    Scenario: Login as new sign up user
        When I enter user name and password and clic
        Then Validate the title after login