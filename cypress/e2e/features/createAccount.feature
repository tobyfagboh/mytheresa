Feature: Create account Test

    Background:
        Given A user is on create account page

    Scenario: Successful Account creation
        When a user clicks on my account button
        And select initials 
        And enters academic title
        And enters first name
        And enters last name
        And enters email address
        And enters password
        And enters confirm password
        And clicks on the register button
        Then the user should be redirected to the dashboard