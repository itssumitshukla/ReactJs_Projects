import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

//Testing Class

class App extends Component {
  //Local State
  constructor() {
    super();

    this.state = {
      name: { firstName: "Sumit", lastName: "Shuk" },
      project: "TEST",
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hi, {this.state.name.firstName} {this.state.name.lastName}. I am
            working on {this.state.project}
          </p>
          <button
            onClick={() => {
              this.setState(
                () => {
                  return {
                    name: { firstName: "Test", lastName: "Testing" },
                  };
                },
                () => {
                  console.log(this.state);
                }
              );
            }}
          >
            Change Name
          </button>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
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
