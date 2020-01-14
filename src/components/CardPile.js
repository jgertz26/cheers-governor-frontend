import React, { Component } from "react"
import "../styles/App.css"

class CardPile extends Component {


  constructor(props) {
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
        this.setState({
          cardSelected: true,
          selectedTitle: myJson["title"],
          selectedDescription: myJson["description"]
        })
        this.props.gatherSelectedCardInfo(this.state.cardSelected, this.state.selectedTitle, this.state.selectedDescription);
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
