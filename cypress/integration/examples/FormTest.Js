describe("Inputs and submit button", () => {
  it("can navigate to the site", () => {
    cy.visit("http://localhost:3000/pizza");
    cy.url().should("include", "localhost");
  });
  it("submit button is disabled", () => {
    cy.get("#submit").should("be.disabled");
  });
  it("Error message for name works", () => {
    cy.get('input[name="name"]').type("S").should("have.value", "S");
    cy.get("#error");
    cy.contains("Name must be longer than 2 characters");
  });
  it("can type a text for a new name", () => {
    cy.get('input[name="name"]').type("hadow").should("have.value", "Shadow");
  });
  it("Can select size", () => {
    cy.get("select").select("medium").should("have.value", "medium");
  });
  it("Can check checkbox", () => {
    cy.get('input[name="pepperoni"]').check().should("be.checked");
  });
  it("Can check multiplr checkbox", () => {
    cy.get('input[name="ham"]').check().should("be.checked");
    cy.get('input[name="pepperoni"]').should("be.checked");
  });
  it("can type special instructions", () => {
    cy.get('input[name="specialInstructions"]')
      .type("Extra Ham please")
      .should("have.value", "Extra Ham please");
  });
  it("submit button is no longer disabled", () => {
    cy.get("#submit").should("not.be.disabled");
  });
  it("for can be submitted", () => {
    cy.get("#submit").click();
  });
});
