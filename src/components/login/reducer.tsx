const initState = {
  isAuthenticated: false,
  isAdmin: false,
  firstName: '',
  lastName: ''
}

export const userConstants = {
  SIGN_IN_USER_START: "SIGN_IN_USER_START",
  SIGN_IN_USER_ERROR: "SIGN_IN_USER_ERROR",
  SET_IS_AUTHENTICATED: "SET_IS_AUTHENTICATED",
  SET_IS_ADMIN: "SET_IS_ADMIN",
  LOGOUT: "LOGOUT"
}

function userReducer(state = initState, action: any) {
  switch(action.type) {
    case userConstants.SET_IS_AUTHENTICATED:
      console.log('USER Reducer:', action.payload)
      return {
        ...state,
        isAuthenticated: action.payload != null,
        isAdmin: action.payload.isAdmin,
        firstName: action.payload.firstName,
        lastName: action.payload.lastName
      }
    
    case userConstants.LOGOUT:
      return  {...initState}
    default:
      return state;
  }
}

export default userReducer;