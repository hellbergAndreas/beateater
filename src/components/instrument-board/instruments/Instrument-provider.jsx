import React from "react"
import Slot from "../slots/slot"
import TimeIndicator from "../../time-indicator/time-indicator"

import bd from "../../../sounds/bd.mp3"
import hh from "../../../sounds/hh.mp3"
import sn from "../../../sounds/sn.mp3"
import ho from "../../../sounds/ho.mp3"

class Instruments extends React.Component {
  constructor() {
    super()
    this.state = {
      instruments: ["hh", "ho", "sn", "bd"],

      slotNumbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
      sounds: {
        bd: bd,
        hh: hh,
        sn: sn,
        ho: ho,
      },
    }
  }

  render() {
    return (
      <div>
        <div className="time-display">
          <div className="name"></div>
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
              <div className="name">{instrument}</div>
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
