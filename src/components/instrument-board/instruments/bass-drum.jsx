import React from "react"
import Slot from "../slots/slot"

const Instruments = () => {
  const instruments = ["bd", "hh"]
  const slotNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  return (
    <div>
      {instruments.map((instrument) => {
        return (
          <div
            key={instrument}
            className={"instrumentBoard__slotRow " + instrument}
          >
            {slotNumbers.map((number) => (
              <Slot
                instrument={instrument}
                key={number}
                number={number}
                name="bd"
              />
            ))}
          </div>
        )
      })}
    </div>
  )
}

export default Instruments
