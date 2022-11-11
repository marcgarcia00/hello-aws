import { userConstants } from "./reducer";

export function setIsAuthenticated(payload: any): any {
  console.log("SET AUTH ACTION: ", payload);
  return {
    type: userConstants.setIsAuthenticated,
    payload: payload
  }
}

export function setIsAdmin(payload: any): any {
  return {
    type: userConstants.setIsAdmin,
    payload: payload
  }
}
