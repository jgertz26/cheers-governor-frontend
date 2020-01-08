import React, { Component } from "react"
import GameLog from "../components/GameLog"
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className='grid-x grid-padding-x'>
          <div className='cell small-4'>
            <GameLog/>
          </div>
          <div className='cell small-8'>
            Card stuff
          </div>
        </div>
      </div>
    );
  }
}

export default App;
