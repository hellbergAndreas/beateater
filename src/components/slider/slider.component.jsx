import React from "react"
import "./slider.styles.scss"

const Slider = () => {
  return (
    <div className="slide-container">
      <input
        type="range"
        min="1"
        max="100"
        value="75"
        className="slide-container__slider slider"
      ></input>
    </div>
  )
}
export default Slider
