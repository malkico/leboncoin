class TermsPage {
  enterURL() {
    cy.visit("https://pandaqaetest.pythonanywhere.com/terms");
  }
  verifyPageBody() {
    return cy.get("body").contains("This is the terms and conditions document");
  }
}
const terms = new TermsPage();
export default terms;
