/// <reference types="cypress" />
import { Given, Then } from "cypress-cucumber-preprocessor/steps";
import privacy from "../../Pages/PrivacyPage.cy";
Given("I navigate to the page", () => {
  privacy.enterURL();
});
Then("Validate the body after loading", () => {
  privacy.verifyPageBody();
});
