import { Component } from "react";
import "./search-box.styles.css";

class Searcbox extends Component {
  render() {
    return (
      <input
        //className="search-box"
        type={`search-box ${this.props.className}`}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default Searcbox;
