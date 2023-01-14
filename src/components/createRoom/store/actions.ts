import { createRoomConstants } from "./constants"
import CreateRoomService from './service';

export const createRoomStart = () => ({
  type: createRoomConstants.CREATE_ROOM_START
});

export const createRoomSuccess = () => ({
  type: createRoomConstants.CREATE_ROOM_SUCCESS
});

export const createRoomError = () => ({
  type: createRoomConstants.CREATE_ROOM_ERROR
});

export const createRoomAsync = (displayName: string) => (dispatch: any) => {
  dispatch(createRoomStart());
  const req = { hostName: displayName };

  CreateRoomService.createRoom(req)
  .then(res => {
    console.log("omg it worked!", res.data);
    dispatch(createRoomSuccess());
  }).catch(err => {
    console.log("AWS RETURNED ERROR: ", err);
    dispatch(createRoomError());
  })
}