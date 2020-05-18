import React from "react"
import { incrementTime } from "../../redux/time/time.actions"
import { connect } from "react-redux"
import "./timeKeeper.styles.scss"

class TimeKeeper extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      timeGoes: false,
    }
  }
  componentDidMount() {}

  componentDidUpdate() {
    if (this.state.timeGoes) {
      this.theTimer("go")
    }
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
      incrementTime(0)
      this.setState((state) => {
        return { timeGoes: !state.timeGoes }
      })
    }
  }

  startTimer = () => {
    this.props.incrementTime(1)
    this.setState((state) => {
      return { timeGoes: !state.timeGoes }
    })
  }

  render() {
    return (
      <div>
        <button
          className={`buttons__button${
            this.state.timeGoes ? " button-red" : " button-green"
          }`}
          onClick={() => {
            if (!this.state.timeGoes) {
              this.startTimer()
            } else if (this.state.timeGoes) {
              this.theTimer("stop")
            }
          }}
        >
          <div className="buttons__button__text">
            {this.state.timeGoes ? "Stop" : "Go"}
          </div>
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
