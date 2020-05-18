import React from "react"
import "./save-button.styles.scss"
import { connect } from "react-redux"
import { addPreset } from "../../../firebase/firebase"

const SaveButton = (props) => {
  const handleClick = () => {
    addPreset("presets", props.preset.preset)
  }
  return (
    <div>
      <button onClick={() => handleClick()} className="save-button">
        Save preset
      </button>
    </div>
  )
}
const mapStateToProps = (state) => ({
  preset: state.preset,
})
export default connect(mapStateToProps)(SaveButton)
