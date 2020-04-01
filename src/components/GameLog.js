import React, { Component } from "react"
import "../styles/App.css"

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21]

<<<<<<< Updated upstream
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

  assignSlot(id) {
    if (this.state.hash[id] == null) {
      let copy = this.state.hash;
      copy[id] = this.props.currentCardTitle;
      this.setState({
        hash: copy
      });
      this.convertHashToListItems();
      this.props.slotSelected();
    }
  }

  convertHashToListItems() {
    let listItems = numbers.map((num) => {
      return (
        <li key={num} onClick={() => this.assignSlot(num)}>
          {this.state.hash[num]}
        </li>
      );
    })

    this.setState({
      gameListItems: listItems
=======
  listItems = (
    props.log.map((value, i) => {
      return (
        <li
          onClick={() => {props.click(i, value == null)}}
          className={(props.selectable && value == null) ? "selectable": ""}
          key={i}>
          {value}
        </li>
      )
>>>>>>> Stashed changes
    })
  }

  componentDidMount() {
    this.convertHashToListItems();
  }

<<<<<<< Updated upstream
  render () {
    return (
      <ol>
        {this.state.gameListItems}
=======
  return (
    <div className="game-log">
      <ol >
        {listItems}
>>>>>>> Stashed changes
      </ol>
    )
  }

}

export default GameLog
