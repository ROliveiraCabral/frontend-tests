import { PokemonType } from "../types/PokemonTypes";

const Base_Url = "http://localhost:3000";

export async function fetchPokemonList(): Promise<PokemonType[]> {
  const response = await fetch(`${Base_Url}/pokemon`);
  return await response.json();
}

export async function fetchPokemonDetail(id: number): Promise<PokemonType> {
  const response = await fetch(`${Base_Url}/pokemon/${id}`);
  return await response.json();
}
