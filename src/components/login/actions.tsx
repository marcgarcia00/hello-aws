import { User } from "../../interface/user";
import { userConstants } from "./reducer";
import UserService from "./service";

const mockUser: User = {
  id: 1,
  username: "marcgarcia",
  firstName: "Marc",
  lastName: "Garcia",
  isAdmin: true
};

export const signinUserStart = () => ({
  type: userConstants.SIGN_IN_USER_START
});

export const signInUserError = () => ({
  type: userConstants.SIGN_IN_USER_ERROR
});

export const userSignInAsync = (username: string, password: string) => (dispatch: any) => {
  dispatch(signinUserStart());

  const req = JSON.stringify({'id': 1, 'username': username, 'password': password})
  // const req = JSON.stringify({'id': 2, 'username': username, 'password': password})
  
  UserService.userSignIn(req)
  .then(res => {
    console.log('response returned from AWS: ', res);
    dispatch(setIsAuthenticated(mockUser));
  }).catch(err => {
    dispatch(setIsAuthenticated(mockUser))
    console.log('AWS Returned Error :( ', err);
  });
}

export function setIsAuthenticated(payload: any): any {
  console.log("SET AUTH ACTION: ", payload);
  return {
    type: userConstants.SET_IS_AUTHENTICATED,
    payload: payload
  }
}

export function setIsAdmin(payload: any): any {
  return {
    type: userConstants.SET_IS_ADMIN,
    payload: payload
  }
}

export function logout(): any {
  console.log("logout clicked");
  return {
    type: userConstants.LOGOUT
  }
}
