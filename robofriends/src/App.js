import React from 'react';
import Cardlist from './Cardlist';
import Searchbox from './Searchbox';
import {robots} from './robots';

const App = ()=> {
  return(
    <div>
      <h1>Robofriends</h1>
      <Searchbox />
      <Cardlist robots={robots}/>  
    </div>
  );
};

export default App;