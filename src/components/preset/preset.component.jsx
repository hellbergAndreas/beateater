import React from "react"
import "./preset.styles.scss"

import {
  converCollectionsSnapshotToMap,
  firestore,
} from "../../firebase/firebase"
import { connect } from "react-redux"
import { setPreset } from "../../redux/instrument-preset/isntrument.action"

class PresetMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      presets: [],
    }
  }

  componentDidMount() {
    const collectionRef = firestore.collection("presets")
    collectionRef.onSnapshot(async (snapshot) => {
      const presetsFromDb = converCollectionsSnapshotToMap(snapshot)

      this.setState(() => {
        return { presets: presetsFromDb }
      })
    })
  }

  render() {
    return (
      <div className="preset">
        Presets
        <div className="preset__list">
          {this.state.presets.map((preset, index) => {
            return (
              <div onClick={() => this.props.setPreset(preset)} key={index}>
                Preset {index + 1}
              </div>
            )
          })}
        </div>
        <div></div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  setPreset: (preset) => dispatch(setPreset(preset)),
})
export default connect(null, mapDispatchToProps)(PresetMenu)
