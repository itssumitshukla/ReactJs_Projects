import { Component } from "react";

class Searcbox extends Component {
  render() {
    return (
      <input
        className="search-box"
        type="search"
        placeholder="Search Monsters"
        onChange={onSearchChange}
      />
    );
  }
}
