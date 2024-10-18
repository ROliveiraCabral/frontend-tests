describe("Testa a página de Sign Up", () => {
  it("Quando clicar em já tem cadastro...deve ir para a tela de login", () => {
    cy.visit("/signup");

    cy.contains("Já tem cadastro? Clique aqui.").click();
    cy.contains("Login");
  });

  it("O botão deve ter 10px de margin top", () => {
    cy.visit("/signup");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
