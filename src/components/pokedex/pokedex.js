import React from 'react';

export default function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <p key={poke.id}>{poke.pokemon}</p>
      ))}
    </div>
  );
}