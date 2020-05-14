import { combineReducers } from "redux"
import timeReducer from "./time/time.reducer"

export default combineReducers({
  time: timeReducer,
})
