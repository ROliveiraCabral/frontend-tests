describe("testa a página de login", () => {
  it("Quando clicar em login deve ir para a página de dashboard", () => {
    cy.visit("/");
    cy.contains("Entrar").click();
    cy.contains("Dashboard");
  });
});
