import React from "react";

export default function Poke({ pokemonName }) {
  const [pokeData, setPokeData] = React.useState("please type a pokemon name");

  React.useEffect(() => {
    if (pokemonName) {
    }
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      .then((r) => r.json())
      .then(
        (result) => {
          setPokeData(result);
        },
        (error) => {
          console.log(error);
        }
      );
  }, [pokemonName]);

  return <pre>{JSON.stringify(pokeData, null, 2)} </pre>;
}
