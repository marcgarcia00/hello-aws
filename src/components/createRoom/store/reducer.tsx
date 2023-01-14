import { createRoomConstants } from "./constants";

const initState = {
  isLoading: false,
  error: false
}

function createRoomReducer(state = initState, action:any) {
  switch(action.type) {
    case createRoomConstants.CREATE_ROOM_START:
      return {...state, isLoading: true }
    case createRoomConstants.CREATE_ROOM_SUCCESS:
      return { ...state, isLoading: false }
    case createRoomConstants.CREATE_ROOM_ERROR:
      return { ...state, isLoading: false, error: true }
    default:
      return state;
  }
}
export default createRoomReducer;