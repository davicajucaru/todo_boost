describe("My First Test", () => {
  it("Visits the Kitchen Sink", () => {
    cy.visit("http://localhost:3000");
    cy.get(".main input").type("Hello, World");
    cy.get("#main-button").click();
    cy.get(".main input").type("Hello, Mike");
    cy.get("#main-button").click();
    cy.get(".main input").type("Hello, Gui");
    cy.get("#main-button").click();

    cy.get("li")
      .contains("Hello, Mike")
      .within(() => {
        cy.get("#delete").click();
      });
  });
});
