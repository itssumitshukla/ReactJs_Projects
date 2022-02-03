import "./Pokedex.css";
import React from "react";
import Pokecard from "./Pokecard";

function Pokedex(props) {
  let color = props.isWinner ? "limegreen" : "red";
  return (
    <div className="Pokedex">
      <div className="winner-div">
        <h1 style={{ color: color }} className="winner">
          {props.isWinner ? "WINNER!" : "DEFEATED!"}
        </h1>
        <h5>Total Experience {props.exp}</h5>
      </div>
      {props.pokemon.map((item) => {
        return (
          <div className="Pokedex-cards">
            <Pokecard
              id={item.id}
              name={item.name}
              type={item.type}
              exp={item.base_experience}
              pokemon={props.pokemon}
            />
          </div>
        );
      })}
    </div>
  );
}

export default Pokedex;
