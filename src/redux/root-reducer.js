import { combineReducers } from "redux"
import timeReducer from "./time/time.reducer"
import InstrumentPresetReducer from "./instrument-preset/instrument-preset.reducer"

export default combineReducers({
  time: timeReducer,
  preset: InstrumentPresetReducer,
})
