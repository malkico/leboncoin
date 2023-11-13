class PrivacyPage {
  enterURL() {
    cy.visit("https://pandaqaetest.pythonanywhere.com/privacy");
  }
  verifyPageBody() {
    return cy.get("body").contains("This is the privacy document");
  }
}
const privacy = new PrivacyPage();
export default privacy;
