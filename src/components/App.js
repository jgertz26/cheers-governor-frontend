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


  setUpGame = () => {
    let setUp = [];

    for (var i = 0; i <= 20; i++) {
      setUp[i] = null
    }
    setUp[6]  = "14";
    setUp[13]  = "7";
    setUp[20] = "Cheers, Governor!";

    return setUp
  }
  // setSelectedCardInfo = (selected, title, description) => {
  //     this.setState({
  //       isCardSelected: selected,
  //       selectedTitle: title,
  //       selectedDescription: description
  //     });

  // }

  unsetSelectedCardInfo = () => this.setSelectedCardInfo(false, null, null);

  render() {
    return (
      <div className="App">
        <header className="App-header">
        </header>
        <GameLog log={this.state.gameLog}/>
      </div>
    );
  }
}

export default App;
