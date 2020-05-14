import React from "react"
import { connect } from "react-redux"
import bd from "../../../sounds/bd.mp3"
import "./slot.styles.scss"

// const Slot = ({ number, time: { time } }) => {
//   // check if global time === this.props.number

//   const playSound = () => {
//     const audioEl = document.getElementsByClassName("audio-element")[0]
//     audioEl.play()
//   }

//   return (
//     <div
//       onClick={() => playSound()}
//       className={`${number === time ? "active" : ""} instrumentSlot`}
//     >
//       <audio className="audio-element">
//         <source src="../../../sounds/bd.mp3"></source>
//       </audio>
//     </div>
//   )
// }

class Slot extends React.Component {
  playSound = () => {
    const audioEl = document.getElementsByClassName("audio-element")[0]
    audioEl.cloneNode(true).play()
  }
  render() {
    return (
      <div className="instrumentSlot" onClick={() => this.playSound()}>
        <audio className="audio-element">
          <source src={bd}></source>
        </audio>
      </div>
    )
  }
}
const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps)(Slot)
