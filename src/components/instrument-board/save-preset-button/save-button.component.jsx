import React from "react"
import "./save-button.styles.scss"
import { connect } from "react-redux"
import { addPreset } from "../../../firebase/firebase"
import { setPreset } from "../../../redux/instrument-preset/isntrument.action"

const SaveButton = (props) => {
  const handleClick = () => {
    addPreset("presets", props.preset.preset)
  }
  return (
    <div>
      <button onClick={() => handleClick()} className="save-button">
        Save preset
      </button>
      <button
        onClick={() => props.setPreset({ preset: {} })}
        className="save-button"
      >
        reset
      </button>
    </div>
  )
}

const mapStateToProps = (state) => ({
  preset: state.preset,
})
const mapDispatchToProps = (dispatch) => ({
  setPreset: (preset) => dispatch(setPreset(preset)),
})
export default connect(mapStateToProps, mapDispatchToProps)(SaveButton)
