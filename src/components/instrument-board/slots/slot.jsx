import React from "react"
import { connect } from "react-redux"
import "./slot.styles.scss"
import { importSound } from "../sounds/sounds"

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
    if (number === time && this.state.loaded) {
      this.playSound()
    }
  }

  playSound = () => {
    let audioEl = document.getElementsByClassName("audio-element")[0]

    audioEl.smoothingTimeConstant = 0.85
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
        className={`${
          this.props.number === this.props.time.time ? "active" : ""
        } 
        ${this.state.loaded ? "loaded" : ""}
        instrumentSlot`}
      >
        <audio className="audio-element">
          <source src={importSound(this.props.instrument)}></source>
        </audio>
      </div>
    )
  }
}

// class Slot extends React.Component {
//   playSound = () => {
//     const audioEl = document.getElementsByClassName("audio-element")[0]
//     audioEl.cloneNode(true).play()
//   }
//   render() {
//     return (
//       <div className="instrumentSlot" onClick={() => this.playSound()}>
//         <audio className="audio-element">
//           <source src={bd}></source>
//         </audio>
//       </div>
//     )
//   }
// }
// const Slot = ({ instrument, number, time: { time } }) => {
//   // check if global time === this.props.number

//   const playSound = () => {
//     const audioEl = document.getElementsByClassName("audio-element")[0]
//     audioEl.cloneNode(true).play()
//   }
//   const setClassName = (e) => {
//     e.target.classList.toggle("loaded")
//     playSound()
//   }

//   return (
//     <div
//       onClick={(e) => setClassName(e)}
//       className={`${number === time ? "active" : ""} instrumentSlot`}
//     >
//       <audio className="audio-element">
//         <source src={importSound(instrument)}></source>
//         {/* <source src="../../../sounds/hh.mp3"></source> */}
//       </audio>
//     </div>
//   )
// }
const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps)(Slot)
