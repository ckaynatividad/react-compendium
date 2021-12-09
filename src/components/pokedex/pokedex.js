import React from 'react';
import './pokedex.css';

export default function Pokedex({ pokemon }) {
  return (
    <div className="entire">
      {pokemon.map((poke) => (
        <><div className="poke"><p key={poke.id}>{poke.pokemon}</p><img src={poke.url_image}></img></div></>
      ))}
    </div>
  );
}