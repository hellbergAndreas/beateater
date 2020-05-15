import React from "react"
import Slot from "../slots/slot"

const Instruments = () => {
  const instruments = ["hh", "bd"]
  const slotNumbers = [1, 2, 3, 4]
  return (
    <div>
      {instruments.map((instrument) => {
        return (
          <div
            key={instrument}
            instrument={instrument}
            className={"instrumentBoard__slotRow " + instrument}
          >
            {slotNumbers.map((number) => (
              <Slot
                instrument={instrument}
                key={number}
                number={number}
                name={instrument}
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Instruments
