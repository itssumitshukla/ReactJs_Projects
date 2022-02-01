import React, { Component } from 'react'
import './Pokecard.css'
 
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';
//const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = (number) => {return number <= 999 ? `00${number}`.slice(-3) : number}


class Pokecard extends Component {
  render() {
    console.log(this.props.data)
    let data = this.props.data
    
    return (
        data.map(n => 
          <div className='Pokecard'>
            <h1>{n.name}</h1>
            <img src={`${POKE_API}${n.id}.png`} alt={n.name} />
            <div>{n.type}</div>
            <div>{n.base_experience}</div>
          </div>
        )
 
    )
  }
}
 
export default Pokecard