import React, { Component } from "react"
import GameUtils from "../utils/GameUtils"
import CardPile from "../components/CardPile"
import GameLog from "../components/GameLog"
import Header from "../components/Header"
import '../styles/App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      gameLog: GameUtils.setUpGame(),
      isCardSelected: false,
      selectedTitle: null,
      selectedDescription: null
    }
  }

  drawRandom() {
    fetch('http://localhost:3001/api/v1/cards.json', {mode: 'cors'})
      .then((response) => {
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setState({
          isCardSelected: true,
          selectedTitle: myJson["title"],
          selectedDescription: myJson["description"]
        })
      });
  }

  assignSlot(index, slotIsNull) {
    if(this.state.isCardSelected && slotIsNull) {
      const logCopy = [...this.state.gameLog]
      logCopy[index] = this.state.selectedTitle

      this.setState({
        gameLog: logCopy,
        isCardSelected: false,
        selectedTitle: null,
        selectedDescription: null
      })

    }
  }

  render() {
    return (
      <div className="app">
        <Header/>
        <div className="main-container">
          <GameLog
            log={this.state.gameLog}
            click={(index, slotIsNull) => this.assignSlot(index, slotIsNull)}
            selectable={this.state.isCardSelected}
          />
          <CardPile
            click={() => this.drawRandom()}
            selectedTitle={this.state.selectedTitle}
            selectedDescription={this.state.selectedDescription}
          />
        </div>
      </div>
    );
  }
}

export default App;
