import React, { Component } from "react"
import GameLog from "../components/GameLog"
import CardPile from "../components/CardPile"
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isCardSelected: false,
      selectedTitle: null,
      selectedDescription: null
    }
  }
  setSelectedCardInfo = (selected, title, description) => {
      this.setState({
        isCardSelected: selected,
        selectedTitle: title,
        selectedDescription: description
      });

  }

  unsetSelectedCardInfo = () => this.setSelectedCardInfo(false, null, null);

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <div className='grid-x grid-padding-x'>
          <div className='game-log cell small-4'>
            <div className='game-log'>
              <GameLog currentCardTitle = {this.state.selectedTitle} slotSelected = {this.unsetSelectedCardInfo}/>
            </div>
          </div>
          <div className='cards-container cell small-8'>
            <div className='cards-container'>
              <CardPile cardSelected = {this.state.isCardSelected} gatherSelectedCardInfo = {this.setSelectedCardInfo}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
