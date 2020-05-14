import React from "react"
import Slot from "../slots/slot"

const BassDrum = () => {
  const slotNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
  const instruments = ["BD", "HH", "FT"]
  return (
    <div>
      {instruments.map((instrument) => {
        return (
          <div
            key={instrument}
            className={"instrumentBoard__slotRow " + instrument}
          >
            {slotNumbers.map((number) => (
              <Slot key={number} number={number} name={instrument} />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default BassDrum
