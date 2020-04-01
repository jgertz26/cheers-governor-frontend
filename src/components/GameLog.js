import React from "react"
import "../styles/App.css"

const gameLog = (props) => {
  let listItems = null

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
    })
  )

  return (
    <div className="game-log">
      <ol >
        {listItems}
      </ol>
    </div>
  )

}

export default gameLog
