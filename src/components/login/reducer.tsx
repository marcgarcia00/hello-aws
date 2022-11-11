const userState = {
  isAuthenticated: false,
  isAdmin: false,
  user: {
    firstName: '',
    lastName: ''
  }
}

export const userConstants = {
  setIsAuthenticated: "SET_IS_AUTHENTICATED",
  setIsAdmin: "SET_IS_ADMIN"
}

function userReducer(state = userState, action: any) {
  switch(action.type) {
    case userConstants.setIsAuthenticated:
      console.log('USER Reducer:', action.payload)
      return {
        ...state,
        isAuthenticated: action.payload != null,
        isAdmin: action.payload.isAdmin,
        user: {...action.payload}
    }
    default:
      return state;
  }
}

export default userReducer;