import React from 'react';


export default function Pokedex({ pokemon }) {
  return (
    <div>
      {pokemon.map((poke) => (
        <><p key={poke.id}>{poke.pokemon}</p><img src={poke.url_image}></img></>
      ))}
    </div>
  );
}