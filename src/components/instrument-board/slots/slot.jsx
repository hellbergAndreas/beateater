import React from "react"
import { connect } from "react-redux"
import "./slot.styles.scss"

const Slot = ({ number, time: { time } }) => {
  console.log(time)
  // check if global time === this.props.number

  // play sounds
  return (
    <div className={`${number === time ? "active" : ""} instrumentSlot`}></div>
  )
}
const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps)(Slot)
