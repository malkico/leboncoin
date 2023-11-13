const URL = "https://pandaqaetest.pythonanywhere.com";

function makePOSTRequest(number) {
  return cy.request({
    method: "POST",
    url: URL,
    form: true,
    body: {
      number,
    },
  });
}

function checkResponseStatusCode(response, statusCode) {
  expect(response.status).to.eq(statusCode);
}

class HomePage {
  enterURL() {
    return cy.visit(URL);
  }
  verifyPageTitle() {
    return cy.title().should("eq", "Factoriall");
  }
  enterNumber(number) {
    cy.get('[id="number"]').clear().type(number);
    return this;
  }
  checkCalculatedFactorial(result) {
    cy.get('[type="submit"]').eq(0).click();
    cy.get('[id="resultDiv"]').should(($p) => {
      const text = $p.text().trim();
      expect(text).to.contains(`${result}`);
    });
    return this;
  }

  checkCalculatedFactorialWithAPI(number, answer) {
    return makePOSTRequest(number).then((response) => {
      checkResponseStatusCode(response, 200);
      expect(response.body).to.have.property("answer", Number(answer));
    });
  }

  checkCalculatedFactorialWithAPIError(number) {
    return makePOSTRequest(number).then((response) => {
      checkResponseStatusCode(response, 500);
    });
  }

  checkMenuLinks(link) {
    cy.contains(link).click();
    return cy.url().should("include", link.toLowerCase());
  }
}

const home = new HomePage();
export default home;
