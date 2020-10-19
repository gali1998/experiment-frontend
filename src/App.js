import React, {Component} from 'react';
import './App.css';
import IdScreenComponent from './Components/IdScreenComponent';

class App extends Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return(
      <div>
        <h1>Welcome to my experiment</h1>
        <IdScreenComponent></IdScreenComponent>
      </div>
    )
  }
}

export default App;
