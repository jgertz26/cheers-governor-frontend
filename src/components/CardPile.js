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


  render () {
    return (
      <div id="draw-random" className="card-pile">
        Draw Random
      </div>
    )
  }

}

export default CardPile
