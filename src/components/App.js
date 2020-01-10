import React, { Component } from "react"
import GameLog from "../components/GameLog"
import CardPile from "../components/CardPile"
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
          <div className='game-log cell small-4'>
            <div className='game-log'>
              <GameLog/>
            </div>
          </div>
          <div className='cards-container cell small-8'>
            <div className='cards-container'>
              <CardPile/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
