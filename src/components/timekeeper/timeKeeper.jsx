import React from "react"
import { incrementTime } from "../../redux/time/time.actions"
import { connect } from "react-redux"

const TimeKeeper = ({ incrementTime, time: { time } }) => {
  console.log(time)
  const startTime = () => {
    setInterval(() => {}, 1000)
    incrementTime(time.time + 1)
    console.log(time)
  }
  return (
    <div>
      <button onClick={() => startTime()}>Start Time</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => ({
  incrementTime: (time) => dispatch(incrementTime(time)),
})
const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps, mapDispatchToProps)(TimeKeeper)
