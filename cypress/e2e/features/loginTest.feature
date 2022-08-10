Feature: Login test

    Background:
        Given A user opens a mytheresa website

    Scenario: I should not be able to login with Incorrect Username 
        When A user clicks myaccount button
        And A then user enters incorrect credentials
            | username   | password   |
            | test@y.com | Bamikole1@ |
        And The user clicks on the login button
        Then Then an error message "Invalid login or password." is displayed
   
    # Scenario: I should not be able to login with Incorrect Password Login
    #     And A user enters incorrect credentials
    #         | username      | password     |
    #         | standard_user | testPassword |
    #     And A user clicks on the login button
    #     Then The an error message "Epic sadface: Username and password do not match any user in this service" is displayed

    # Scenario: Success Login
    #     When A user enters the username "standard_user"
    #     And A user enters the password "secret_sauce"
    #     And A user clicks on the login button
    #     Then the url will contains the inventory subdirectory
    
        