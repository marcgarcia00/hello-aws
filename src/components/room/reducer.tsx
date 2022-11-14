const initState = {
  name: '',
  cards: [],
  activeCard: {
    name: '',
    description: '',
    pointValue: 0
  },
  activeVote: {
    id: '',
    pointValue: 0
  }
}

export const roomConstants = { 
  SET_ROOM_NAME: "SET_ROOM_NAME",
  SET_VOTE: "SET_CARD_POINT_VALUE"
}

function roomReducer(state = initState, action: any) {
  switch(action.type) {
    case roomConstants.SET_ROOM_NAME:
      return {...state, name: action.payload}
    case roomConstants.SET_VOTE:
      return {...state, vote: action.payload}
    default: 
      return state;
  }
}
export default roomReducer;