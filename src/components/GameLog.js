import React, { Component } from "react"
import "../styles/App.css"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

class GameLog extends Component {


  constructor() {
    super();
    let setUp = {};
    numbers.map((num) => setUp[num] = null)
    setUp[7]  = "14";
    setUp[14]  = "7";
    setUp[21] = "Cheers, Governor!";

    this.state = {
      hash: setUp,
      gameListItems: null
    }
  }

  componentDidMount() {
    let listItems = numbers.map((num) => {
      return (<li id={num}>{this.state.hash[num]}</li>);
    })

    this.setState({
      gameListItems: listItems
    })
  }

  render () {
    return (
      <ol>
        {this.state.gameListItems}
      </ol>
    )
  }

}

export default GameLog
