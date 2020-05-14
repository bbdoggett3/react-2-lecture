import React, { Component } from 'react';
import Citizen from './components/Citizen';
import data from './data';   //make sure to import your data.
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      citizens: []
    }
  }

  componentDidMount() {
    this.setState({ citizens: data})
  }

  //prop is assigned in the call of the Citizen down below in green

  render() {
    console.log(this.state);
    const citizens = this.state.citizens.map(element => {
      return <div>
        <Citizen citizen = {element}/>  
      </div>
    })
    return (
      <div className="App">
        {citizens}
      </div>
    );
  }
  
}

export default App;
