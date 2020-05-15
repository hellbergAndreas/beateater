import React from "react"
import { connect } from "react-redux"
import "./slot.styles.scss"
import { importSound } from "../sounds/sounds"

import bd from "../../../sounds/bd.mp3"
import hh from "../../../sounds/hh.mp3"

class Slot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
      slotSound: null,
    }
  }
  componentDidMount() {
    // gathering all the imported sounds and collects them in an Object
    const sounds = {
      bd: bd,
      hh: hh,
    }
    // creates a new Adio, which is collected from the sounds-Object
    // the instrument that matches the name in the sounds objects get set to state
    let sound = new Audio(sounds[this.props.instrument])
    this.setState((state) => {
      return { ...state, slotSound: sound }
    })
  }
  componentDidUpdate() {
    //destructuring props
    let {
      number,
      time: { time },
    } = this.props

    // if slotnumber === current time && has been clicked ( is loaded)
    // we play the sounds
    if (number === time && this.state.loaded) {
      this.playSound()
    }
  }

  playSound = () => {
    let audioEl = this.state.slotSound
    audioEl.cloneNode(true).play()
  }
  loadSlotWithSound = (e) => {
    this.setState((state) => {
      return { loaded: !state.loaded }
    })
  }

  render() {
    return (
      <div
        onClick={(e) => this.loadSlotWithSound(e)}
        className={`instrumentSlot ${
          this.props.number === this.props.time.time ? "active" : ""
        } ${this.state.loaded ? "loaded" : ""}`}
      ></div>
    )
  }
}

const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps)(Slot)
