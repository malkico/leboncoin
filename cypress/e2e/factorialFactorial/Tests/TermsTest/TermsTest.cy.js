/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import terms from "../../Pages/TermsPage.cy";
Given("I navigate to the page", () => {
  terms.enterURL();
});
Then("Validate the body after loading", () => {
  terms.verifyPageBody();
});
