import React from "react"
import Slot from "../slots/slot"

class BassDrum extends React.Component {
  render() {
    const slotNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    return (
      <div className="slotRow">
        {slotNumbers.map((number) => (
          <Slot key={number} number={number} name="bd" />
        ))}
      </div>
    )
  }
}

export default BassDrum
