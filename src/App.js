import React, {Component} from 'react';
import './App.css';
import Card  from './Components/card';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="App">
        <h1>React Project</h1>
        <Card/>
      </div>
    );
  }
}

export default App;
