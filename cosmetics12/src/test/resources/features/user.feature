Feature: User

  Scenario Outline: fetch all
    Given getAll
    And getById

    Examples:
    | id | email | full_name | password | user_name |
    | 5  | poojapurbey469@gmail.com | Puja Purbey | $2a$10$f3gATons5Aj4m/UBbnrPJexDfkhXvSAdiSYauzF8hEHa0iYz/86VG | puja12 |




   Scenario Outline: for post
     Given post data
     And verify
     Then finally

     Examples:

       | id | email | full_name | password | user_name |
       | 5  | poojapurbey469@gmail.com | Puja Purbey | $2a$10$f3gATons5Aj4m/UBbnrPJexDfkhXvSAdiSYauzF8hEHa0iYz/86VG | puja12 |


