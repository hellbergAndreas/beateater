import React from "react"

import BassDrum from "./instruments/bass-drum"

import "./instrument-board.styles.scss"
const instrumentBoard = () => {
  return (
    <div className="instrumentBoard">
      <BassDrum></BassDrum>
    </div>
  )
}

export default instrumentBoard
