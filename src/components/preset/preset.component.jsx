import React from "react"
import "./preset.styles.scss"

import {
  converCollectionsSnapshotToMap,
  firestore,
  deletePreset,
} from "../../firebase/firebase"
import { connect } from "react-redux"
import { setPreset } from "../../redux/instrument-preset/isntrument.action"

class PresetMenu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      hidde: false,
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
        <div className="preset__content">
          <h2>Presets</h2>
          <div className="preset__content__list">
            {this.state.presets.map((preset, index) => {
              return (
                <div className="preset__content__list__item">
                  <h3 onClick={() => this.props.setPreset(preset)} key={index}>
                    Preset {index + 1}
                  </h3>
                  <button onClick={() => deletePreset("presets", preset.id)}>
                    x
                  </button>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => ({
  setPreset: (preset) => dispatch(setPreset(preset)),
})
export default connect(null, mapDispatchToProps)(PresetMenu)
