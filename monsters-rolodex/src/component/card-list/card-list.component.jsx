import { Component } from "react";

class CardList extends Component {
  render() {
    const { monsters } = this.props;
    return (
      <div>
        {monsters.map((monster) => (
          <div className="card-container">
            <img alt={`monster ${monster.name}`}></img>
          </div>
        ))}
      </div>
    );
  }
}

export default CardList;
