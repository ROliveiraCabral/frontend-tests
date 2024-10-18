describe("testa a página de login", () => {
  it("Quando clicar em login deve ir para a página de dashboard", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Entrar").click();

    cy.contains("Dashboard");
  });

  it("Quando clicar em login deve ir para a página de dashboard e ter um pokemon pikachu", () => {
    cy.visit("/");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Entrar").click();
    cy.contains("Dashboard");
    cy.contains("Pikachu");
  });

  it("Quando clicar em Sign Up deve ir para a página de cadastro", () => {
    cy.visit("/");
    
    cy.contains("Não tem cadastro? Clique aqui.").click();
    cy.contains("Cadastre-se");
  });

  it("O botão deve ter 10px de margin top", () => {
    cy.visit("/signup");

    cy.get("div")
      .find("button")
      .should("have.css", "marginTop")
      .and("match", /10px/);
  });
});
