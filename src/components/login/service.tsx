import axios from "axios";
import { User } from "../../interface/user";

const API_GATEWAY_URL = 'https://kolqsq8nrf.execute-api.us-east-1.amazonaws.com/dev';

class UserService {
  userSignIn = (requestBody: any): Promise<User> => 
    axios.post(`${API_GATEWAY_URL}/login`, requestBody);
}

export default new UserService();