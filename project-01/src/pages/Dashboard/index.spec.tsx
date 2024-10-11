import { fireEvent, render, screen } from "@testing-library/react";
import { Dashboard } from ".";
import { fetchPokemonList } from "../../Services/PokemonService";
import { faker } from "@faker-js/faker";

const mockFetchListPokemonFn = vi
  .fn(fetchPokemonList)
  .mockImplementation(async () => {
    return [
      {
        id: 1,
        name: "Pikachu",
        image: faker.image.urlPlaceholder(),
        type: "Eletrico",
      },
      {
        id: 2,
        name: "Charmander",
        image: faker.image.urlPlaceholder(),
        type: "Fogo",
      },
    ];
  });

const navigateMock = vi.fn();

describe("Testa o componente Dashboard", () => {
  vi.mock("react-router-dom", () => {
    return {
      useNavigate() {
        return navigateMock;
      },
    };
  });

  test("Deve haver um título na página", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const title = await screen.findByText("Dashboard");

    expect(title).toBeInTheDocument();
  });

  test("Deve haver uma lista com 10 pokemons", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const items = await screen.findAllByRole("listitem");

    expect(items).toHaveLength(2);
  });

  test("Deve haver um pikachu na lista", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const pikachu = await screen.findByText("Pikachu");

    expect(pikachu).toBeInTheDocument();
  });

  test("Deve ser possível clicar no li para abrir a página de detalhes do pokemon", async () => {
    render(<Dashboard fetchPokemonList={mockFetchListPokemonFn} />);

    const link = await screen.findByText("Pikachu");

    fireEvent.click(link);

    expect(navigateMock).toHaveBeenCalledOnce();
  });
});
