import React, { Component } from "react"
import "../styles/App.css"

class CardPile extends Component {


  constructor() {
    super();

    this.state = {
      cardSelected: false,
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
      });
  }

  render () {
    return (
      <div id="draw-random" onClick={() => this.drawRandom()} className="card-pile">
        Draw Random
      </div>
    )
  }

}

export default CardPile
