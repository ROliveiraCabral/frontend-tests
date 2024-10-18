describe("Testa a página de Dashboard", () => {
  it("Deve carregar uma lista com 10 pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("get", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
    cy.contains("Minun");
    cy.contains("Venusaur");
    cy.contains("Geodude");
    cy.contains("Mewtwo");
    cy.contains("Petilil");
    cy.contains("Dusknoir");
    cy.contains("Lycanroc");
  });

  it("Quando clicar em um pokemon deve abrir a página de detalhes", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Pikachu").click({ force: true });
    cy.contains("Voltar");
  });

  it("Quando clicar em um pokemon deve abrir a página de detalhes e depois voltar para a página dos pokemons", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.contains("Pikachu").click({ force: true });

    cy.contains("Voltar").click();
    cy.contains("Pikachu");
    cy.contains("Rotom");
    cy.contains("Charmander");
    cy.contains("Minun");
    cy.contains("Venusaur");
    cy.contains("Geodude");
    cy.contains("Mewtwo");
    cy.contains("Petilil");
    cy.contains("Dusknoir");
    cy.contains("Lycanroc");
  });

  it("Deve ter um display do tipo grid", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.intercept("GET", "http://localhost:3000/pokemon/1", {
      fixture: "pokemon-detail.json",
    });

    cy.get("div").find("ul").should("have.css", "display").and("match", /grid/);
  });

  it("Devem haver 10 pokemons na tela com li's", () => {
    cy.visit("/dashboard");

    cy.intercept("GET", "http://localhost:3000/pokemon", {
      fixture: "pokemons.json",
    });

    cy.get("div")
      .find("li")
      .should(($li) => {
        expect($li).to.have.length(10);

        const pikachu = $li[0];

        expect(pikachu.textContent).to.contain("Pikachu");
      });
  });
});
