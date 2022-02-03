import React from "react";
import "./Pokecard.css";

function Pokecard(props) {
  function append(id) {
    let prependedNumber;
    if (id < 999) {
      prependedNumber = String(id).padStart(3, 0);
    } else {
      prependedNumber = id;
    }
    return prependedNumber;
  }

  const POKE_API = `https://assets.pokemon.com/assets/cms2/img/pokedex/detail/`;
  let imgSrc = `${POKE_API}${append(props.id)}.png`;
  return (
    <div className="Pokecard">
      <h1 className="Pokecard-title">{props.name}</h1>
      <img src={imgSrc} alt="pokemon" />
      <div className="Pokecard-data">Type: {props.type}</div>
      <div className="Pokecard-data"> EXP: {props.exp}</div>
    </div>
  );
}

export default Pokecard;
