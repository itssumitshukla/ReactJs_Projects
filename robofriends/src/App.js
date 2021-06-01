import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots} from './robots';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: robots,
      searchfield: ''
    }
  }
  //On search function
  onSearchChange(e){
    console.log(e.target.value)
  }

  render(){
    return(
      <div className='tc'>
        <h1>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Cardlist robots={this.state.robots}/>  
      </div>
    );
  }
};

export default App;