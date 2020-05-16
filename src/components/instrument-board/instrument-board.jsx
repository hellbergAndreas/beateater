import React from "react"

import Instrument from "./instruments/Instrument-provider"
import TimeKeeper from "../timekeeper/timeKeeper"

import "./instrument-board.styles.scss"
const instrumentBoard = () => {
  return (
    <div className="instrumentBoard">
      <div class="logo">
        <h1>beatEater</h1>
      </div>
      <Instrument></Instrument>
      <TimeKeeper></TimeKeeper>
    </div>
  )
}

export default instrumentBoard
