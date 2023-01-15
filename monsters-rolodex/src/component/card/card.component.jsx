import { Component } from "react";

import "./card.style.css";

class Card extends Component {
  render() {
    const { name, email, id } = this.props.monster;
    return (
      <div className="card-container" key={id}>
        <img
          alt={`monster ${name}`}
          src={`https://robohash.org/${id}?set=set2size=1800x180`}
        ></img>
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    );
  }
}

export default Card;
