import React from "react"
import { incrementTime } from "../../redux/time/time.actions"
import { connect } from "react-redux"

class TimeKeeper extends React.Component {
  componentDidMount() {}

  componentDidUpdate() {
    this.theTimer("go")
  }

  theTimer = (action) => {
    // destructuring props
    let {
      incrementTime,
      time: { time },
    } = this.props

    if (action === "go") {
      this.timer = setTimeout(() => {
        if (time < 16) {
          incrementTime(time + 1)
        } else {
          incrementTime(1)
        }
      }, 100)
    } else if (action === "stop") {
      clearInterval(this.timer)
    }
  }

  stopTimer = () => {
    console.log("hej")
  }

  startTimer = () => {
    this.props.incrementTime(1)
  }

  render() {
    return (
      <div>
        <button onClick={() => this.startTimer()}>Start Time</button>
        <button onClick={() => this.theTimer("stop")}>>stop</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  incrementTime: (time) => dispatch(incrementTime(time)),
})
const mapStateToProps = (state) => ({
  time: state.time,
})
export default connect(mapStateToProps, mapDispatchToProps)(TimeKeeper)
