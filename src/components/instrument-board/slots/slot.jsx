import React from "react"
import { connect } from "react-redux"
import { Howl } from "howler"
import {
  sendSlotInfoToStore,
  removeSlotFromStore,
} from "../../../redux/instrument-preset/isntrument.action"

import "./slot.styles.scss"

class Slot extends React.Component {
  constructor(props) {
    super(props)
    this.slotNameInStore = `${this.props.name}${this.props.number}`
  }
  componentDidMount() {}
  // shouldComponentUpdate(nextProp) {
  //   if (this.props.preset.preset === nextProp.preset.preset) {
  //     return true
  //   } else {
  //     return false
  //   }
  // }
  componentDidUpdate() {
    let {
      number,
      time: { time },
    } = this.props

    if (number === time && this.checkStoreForSlotInfo()) {
      console.log(number)
      this.playSound()
    }
    console.log("im updating")
  }

  playSound = () => {
    const src = this.props.instrument
    let audioEl = new Howl({
      src,
    })
    if (src.includes("/ho")) {
      audioEl.volume(0.7)
    } else if (src.includes("/hh")) {
      audioEl.volume(0.5)
    }
    audioEl.play()
  }

  loadSlotWithSound = (e) => {
    let slotInfo = {
      instrument: this.props.name,
      number: this.props.number,
    }
    if (!this.checkStoreForSlotInfo(slotInfo)) {
      this.props.sendSlotInfoToStore(slotInfo)
    } else {
      this.props.removeSlotFromStore(this.slotNameInStore)
    }
  }

  checkStoreForSlotInfo() {
    if (!this.props.preset.preset[this.slotNameInStore]) {
      return false
    } else {
      return true
    }
  }

  render() {
    return (
      <div
        onClick={(e) => this.loadSlotWithSound(e)}
        className={`instrumentBoard__slotRow__slot ${
          this.props.number === this.props.time.time
            ? "instrumentBoard__slotRow__slot__active active"
            : ""
        }
        ${
          this.checkStoreForSlotInfo()
            ? "instrumentBoard__slotRow__slot__loaded loaded"
            : ""
        }
        `}
      ></div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.time,
  preset: state.preset,
})
const mapDispatchToProps = (dispatch) => ({
  sendSlotInfoToStore: (slotInfo) => dispatch(sendSlotInfoToStore(slotInfo)),
  removeSlotFromStore: (slotName) => dispatch(removeSlotFromStore(slotName)),
})
export default connect(mapStateToProps, mapDispatchToProps)(Slot)
