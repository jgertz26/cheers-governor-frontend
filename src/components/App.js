import React, { Component } from "react"
import GameLog from "../components/GameLog"
import CardPile from "../components/CardPile"
import '../styles/App.css';



class App extends Component {
  constructor() {
    super();

    this.state = {
      gameLog: this.setUpGame(),
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
          cardSelected: true,
          selectedTitle: myJson["title"],
          selectedDescription: myJson["description"]
        })
      });
  }

  render() {
    return (
      <div className="app">
        <header className="app-header">
        </header>
        <div className="main-container">
          <GameLog log={this.state.gameLog}/>
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
