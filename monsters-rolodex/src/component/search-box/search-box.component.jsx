import { Component } from "react";

class Searcbox extends Component {
  render() {
    return (
      <input
        //className="search-box"
        type={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.props.onChangeHandler}
      />
    );
  }
}

export default Searcbox;
