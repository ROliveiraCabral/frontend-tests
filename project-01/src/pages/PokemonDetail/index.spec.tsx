import { render, screen } from "@testing-library/react";
import { PokemonDetail } from ".";
import { fetchPokemonDetail } from "../../Services/PokemonService";
import { faker } from "@faker-js/faker";
import * as rrd from "react-router-dom";

const mockFn = vi.fn(fetchPokemonDetail);
const mockFetchPokemonDetailFn = mockFn.mockImplementation(async () => {
  return {
    id: 1,
    name: "pikachu",
    image: faker.image.urlPlaceholder(),
    type: "elétrico",
  };
});

describe("Testa o componente PokemonDetail", () => {
  vi.mock("react-router-dom", () => {
    return {
      useParams: () => ({
        id: 1,
      }),
      Link: vi.fn().mockImplementation((props) => props.children),
    };
  });

  test("Deve haver um título na página", async () => {
    render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

    const title = await screen.findByText("pikachu");

    expect(title).toBeInTheDocument();
  });

  test("Deve haver um link para voltar", async () => {
    render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);

    const linkBack = await screen.findByText("Voltar");

    expect(linkBack).toBeInTheDocument();
  });

  /*test("Deve validar quando não há parâmetro na rota", async () => {
    vi.spyOn(rrd, "useParams").mockImplementationOnce(() => ({
      id: "0",
    }));
  
    render(<PokemonDetail fetchPokemonDetail={mockFetchPokemonDetailFn} />);
  
    const errorText = await screen.findByText("O id não é válido!");
  
    expect(errorText).toBeInTheDocument();
  });*/
});
