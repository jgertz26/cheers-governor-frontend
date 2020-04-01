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

  setUpGame() {
    let setUp = [];

    for (var i = 0; i <= 20; i++) {
      setUp[i] = null
    }
    setUp[6]  = "14";
    setUp[13]  = "7";
    setUp[20] = "Cheers, Governor!";

    return setUp
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
