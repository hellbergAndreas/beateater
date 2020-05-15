import React from "react"
import { connect } from "react-redux"
import "./slot.styles.scss"

class Slot extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      loaded: false,
    }
  }
  componentDidMount() {}
  componentDidUpdate() {
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
    let audioEl = new Audio(this.props.instrument)

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
