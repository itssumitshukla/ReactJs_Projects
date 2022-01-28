import React, { Component } from 'react'
import './Pokecard.css'
 
const POKE_API = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'
 
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