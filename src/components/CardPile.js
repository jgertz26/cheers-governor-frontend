import React, { Component } from "react"
import "../styles/App.css"

class CardPile extends Component {


  constructor(props) {
    super();
    this.state = {
      cardSelected: props.cardSelected,
      selectedTitle: null,
      selectedDescription: null
    }
  }

  drawRandom() {
    var request = new Request('http://localhost:3001/api/v1/cards.json');
    fetch(request, {mode: 'cors'})
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
        this.props.gatherSelectedCardInfo(this.state.cardSelected, this.state.selectedTitle, this.state.selectedDescription);
      });
  }

  renderSelectedCard() {
    if(this.props.cardSelected) {
      return (
        <div className="selected-card">
          <p><b>{this.state.selectedTitle}</b></p>
          <p>{this.state.selectedDescription}</p>
        </div>
      )
    }
  }

  render () {
    return (
      <div>
        <div id="draw-random" onClick={() => this.drawRandom()} className="card-pile">
          Draw Random
        </div>
        {this.renderSelectedCard()}
      </div>
    )
  }

}

export default CardPile
