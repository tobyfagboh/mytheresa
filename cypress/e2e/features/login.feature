Feature: Login test

    Feature Login page will work depending on the user credentials.

    Background:
        Given A user opens a mytheresa website
    Scenario: UnSuccess Login
        When A user clicks myaccount button
        And A then user enters incorrect credentials
            | username          | wrongPassword |
            | tobi2@maildrop.cc | Bamikole1@1   |
        And The user clicks on the login button
        Then an error message "Invalid login or password." is displayed
    Scenario: Success Login
        When A then user enters correct credentials
            | username          | password   |
            | tobi2@maildrop.cc | Bamikole1@ |
        And A user then clicks on the login button
        Then User is redierected to my account