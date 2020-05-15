import React from "react"
import Slot from "../slots/slot"
import TimeIndicator from "../../time-indicator/time-indicator"

import bd from "../../../sounds/bd.mp3"
import hh from "../../../sounds/hh.mp3"
import snare from "../../../sounds/snare.mp3"

class Instruments extends React.Component {
  constructor() {
    super()
    this.state = {
      instruments: ["hh", "bd", "snare"],
      slotNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      sounds: {
        bd: bd,
        hh: hh,
        snare: snare,
      },
    }
  }

  render() {
    return (
      <div>
        <div className="time-display">
          HEJ
          {this.state.slotNumbers.map((number) => {
            return <TimeIndicator number={number} key={number}></TimeIndicator>
          })}
        </div>

        {this.state.instruments.map((instrument) => {
          return (
            <div
              key={instrument}
              instrument={instrument}
              className={"instrumentBoard__slotRow " + instrument}
            >
              HEJ
              {this.state.slotNumbers.map((number) => (
                <Slot
                  instrument={this.state.sounds[instrument]}
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
}

export default Instruments
