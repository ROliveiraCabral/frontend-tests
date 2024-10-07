import { Link, useParams } from "react-router-dom";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";
import { PokemonType } from "../../types/PokemonTypes";

interface IProps {
  fetchPokemonDetail: (id: number) => Promise<PokemonType>;
}

export const PokemonDetail = ({ fetchPokemonDetail }: IProps) => {
  const params = useParams();
  const [pokemon, setPokemon] = useState<PokemonType>({
    id: 0,
    image: "",
    name: "",
    type: "",
  });

  useEffect(() => {
    (async () => {
      if (!params.id || params.id === "0") {
        return;
      } else {
        const data = await fetchPokemonDetail(parseInt(params.id));
        setPokemon(data);
      }
    })();
  }, [fetchPokemonDetail, params.id]);

  return (
    <div className={styles.container}>
      <div>
        <h1>{pokemon.name}</h1>
        <img src={pokemon.image} alt={pokemon.name} />
        <strong>{pokemon.type}</strong>
      </div>
      <Link to="/dashboard">Voltar</Link>
    </div>
  );
};
