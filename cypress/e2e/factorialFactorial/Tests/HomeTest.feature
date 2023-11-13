Feature: Check the main feature of the home page
  Scenario: Calculate the factorial of a number on the home page
    Given I navigate to the home page
    When I enter a valid number
      | number |
      | 3      |
    Then Validate the calculated factorial
      | result |
      | 6      |
    When I enter a valid number
      | number |
      | 2      |
    Then Validate the calculated factorial
      | result |
      | 2      |
    When I enter a valid number
      | number |
      | 5      |
    Then Validate the calculated factorial
      | result |
      | 120    |
    When I enter a valid number
      | number |
      | 3v     |
    Then Validate the calculated factorial
      | result                  |
      | Please enter an integer |
  Scenario: Calculate the factorial with a POST request
    * the API should respond with a calculated result
      | number | answer |
      | 5      | 120    |    
	Scenario: Check menu page redirections
	  Given I navigate to the home page
    When I click on the link and should be redirected to the right page
      | link    |
      | Privacy |
    Given I navigate to the home page
    And I click on the link and should be redirected to the right page
      | link  |
      | Terms |
