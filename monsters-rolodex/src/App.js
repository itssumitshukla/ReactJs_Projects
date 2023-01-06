import { Component } from "react";

//import logo from "./logo.svg";
import "./App.css";

//Testing Class

class App extends Component {
  //Local State
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  //Get list from api placeholder
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response);
    });
  }

  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return <h1 key={monster.id}>{monster.name}</h1>;
        })}
      </div>
    );
  }
}

//Testing Function ootb
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
