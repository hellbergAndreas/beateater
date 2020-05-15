import React from "react"
import { connect } from "react-redux"
import "./time-indicator.styles.scss"

const TimeIndicator = ({ number, time: { time } }) => {
  return (
    <div
      className={`time-display__time-indicator ${
        number === time ? "indicate-time" : ""
      }`}
    ></div>
  )
}

const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps)(TimeIndicator)
