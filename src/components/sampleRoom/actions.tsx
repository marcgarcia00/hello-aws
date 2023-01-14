import { roomConstants } from "./reducer";

export function setRoomName(payload: any): any {
  return {
    type: roomConstants.SET_ROOM_NAME,
    payload: payload
  }
}

export function setVote(payload: any): any {
  return {
    type: roomConstants.SET_VOTE,
    payload: payload
  }
}