import React from "react"
import { incrementTime } from "../../redux/time/time.actions"
import { connect } from "react-redux"
import "./timeKeeper.styles.scss"

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

  startTimer = () => {
    this.props.incrementTime(1)
  }

  render() {
    return (
      <div class="buttons">
        <button class="buttons__button" onClick={() => this.startTimer()}>
          Start
        </button>
        <button class="buttons__button" onClick={() => this.theTimer("stop")}>
          Stop
        </button>
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
