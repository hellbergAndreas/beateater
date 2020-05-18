const INITIAL_STATE = {
  time: 0,
}

const timeReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "INCREMENT_TIME":
      return {
        time: action.payload,
      }
    default:
      return state
  }
}

export default timeReducer
