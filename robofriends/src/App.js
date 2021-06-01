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
  onSearchChange = (e) => {
    this.setState({searchfield: e.target.value});
  }

  render(){
    const filteredRobots = this.state.robots.filter(robots =>{
      return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
      });

    return(
      <div className='tc'>
        <h1 className='f2'>Robofriends</h1>
        <Searchbox searchChange={this.onSearchChange} />
        <Cardlist robots={filteredRobots}/>  
      </div>
    );
  }
};

export default App;