import React from "react"
import Slot from "../slots/slot"

const BassDrum = () => {
  const slotNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  const instruments = ["BD", "HH"]
  return (
    <div>
      {instruments.map((instrument) => {
        return (
          <div
            key={instrument}
            className={"instrumentBoard__slotRow " + instrument}
          >
            {slotNumbers.map((number) => (
              <Slot key={number} number={number} name="bd" />
            ))}
          </div>
        )
      })}
    </div>
    // <div className="instrumentBoard__slotRowBD">
    // </div>
  )
}

export default BassDrum

// class BassDrum extends React.Component {
//   render() {
//     const slotNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
//     return (
//       <div className="slotRow">
//         {slotNumbers.map((number) => (
//           <Slot key={number} number={number} name="bd" />
//         ))}
//       </div>
//     )
//   }
// }
