/// <reference types="cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import home from "../../Pages/HomePage";
// Scenario : Calculate the factorial of a number on the home page
Given("I navigate to the home page", () => {
  home.enterURL();
  home.verifyPageTitle();
});
When("I enter a valid number", (datatable) => {
  datatable.hashes().forEach((element) => {
    home.enterNumber(element.number);
  });
});
Then("Validate the calculated factorial", (datatable) => {
  datatable.hashes().forEach((element) => {
    home.checkCalculatedFactorial(element.result);
  });
});

//  Scenario: Calculate the factorial with a POST request
Given("the API should respond with a calculated result", (datatable) => {
  datatable.hashes().forEach((element) => {
    const number = element.number;
    const answer = element.answer;
    return home.checkCalculatedFactorialWithAPI(number, answer);
  });
});

Given("the API should respond with a 500 error code", (datatable) => {
  datatable.hashes().forEach((element) => {
    const number = element.number;
    return home.checkCalculatedFactorialWithAPIError(number);
  });
});

// Scenario : Check menu page redirections
When(
  `I click on the link and should be redirected to the right page`,
  (datatable) => {
    datatable.hashes().forEach((element) => {
      return home.checkMenuLinks(element.link);
    });
  }
);
