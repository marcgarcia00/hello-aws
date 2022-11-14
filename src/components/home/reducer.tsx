const initState = {
  value: 0
}

export const counterConstants = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT"
}

function counterReducer(state = initState, action: any) {
  switch(action.type) {
    case counterConstants.INCREMENT:
      return {...state, value: state.value + 1}
    case counterConstants.DECREMENT:
      return {...state, value: state.value - 1}
    default: 
      return state;
  }
}

export default counterReducer;