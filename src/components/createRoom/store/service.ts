import axios from "axios";

const API_GATEWAY_URL = "https://q8p3zso1u3.execute-api.us-east-1.amazonaws.com/dev/create-room";

class CreateRoomService {
  createRoom = (requestBody: any): Promise<any> =>
    axios.post(`${API_GATEWAY_URL}`, requestBody)
}

export default new CreateRoomService();