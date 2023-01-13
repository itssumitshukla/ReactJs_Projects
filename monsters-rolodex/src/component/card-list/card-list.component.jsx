import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <div className="card-container" key={monster.id}>
            <img
              alt={`monster ${monster.name}`}
              src={`https://robohash.org/${monster.id}?set=set2size=1800x180`}
            ></img>
            <h2>{monster.name}</h2>
            <p>{monster.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
