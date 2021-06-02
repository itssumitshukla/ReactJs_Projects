import React, {Component} from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import Scroll from './Scroll';
import ErrorBoundry from './ErrorBoundry';

class App extends Component {
  constructor(){
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
  }
//
  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response =>{
        return response.json();
      })
      .then(users =>{
        this.setState({robots: users});
      })
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
        <Scroll>
          <ErrorBoundry>
            <Cardlist robots={filteredRobots}/>  
            </ErrorBoundry>
        </Scroll>

      </div>
    );
  }
};

export default App;