import React from "react";
import Poke from "./poke";
export default function Display() {
  const [pokemon, setPokemon] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();
    const pokemonName = event.target.elements.userInput.value;
    setPokemon(pokemonName);
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="userInput"></label>
        <input placeholder="pokemonName" id="userInput" />
        <button>submit</button>
      </form>
      <Poke pokemonName={pokemon} />
    </div>
  );
}
