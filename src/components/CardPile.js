import React from "react"
import "../styles/App.css"

const cardPile = (props) => {

  let selectedCard = null

  if(props.selectedTitle != null) {
    selectedCard = (
      <div className="selected-card">
        <p><b>{props.selectedTitle}</b></p>
        <p>{props.selectedDescription}</p>
      </div>
    )
  }

  return (
    <div className="cards-container">
      <div id="draw-random" onClick={props.click} className="card-pile">
        Draw Random
      </div>
      {selectedCard}
    </div>
  )

}

export default cardPile
