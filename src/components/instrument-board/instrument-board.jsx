import React from "react"

import Instrument from "./instruments/Instrument-provider"
import TimeKeeper from "../timekeeper/timeKeeper"
import SaveButton from "./save-preset-button/save-button.component"
import "./instrument-board.styles.scss"

import "./instrument-board.styles.scss"
const instrumentBoard = () => {
  return (
    <div className="instrumentBoard">
      <SaveButton></SaveButton>
      <div className="logo">
        <h1>beatEater</h1>
      </div>
      <Instrument></Instrument>
      <div className="instrumentBoard__board-buttons">
        <TimeKeeper></TimeKeeper>
      </div>
    </div>
  )
}

export default instrumentBoard
