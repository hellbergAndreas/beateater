import React from "react"

import Instrument from "./instruments/Instrument-provider"

import "./instrument-board.styles.scss"
const instrumentBoard = () => {
  return (
    <div className="instrumentBoard">
      <Instrument></Instrument>
    </div>
  )
}

export default instrumentBoard
