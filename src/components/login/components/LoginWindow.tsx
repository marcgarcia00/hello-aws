import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

function LoginWindow(props: any): any { 
  const [username, setUsername] = useState("marcgarcia");
  const [password, setPassword] = useState("password");

  // useEffect(() => {
  //   if(props.user && props.user.isAuthenticated) {
  //     window.location.href = "/home";
  //   }
  // }, [props.user.isAuthenticated]);

  const handleLogin = () => {
    props.userSignIn(username, password);
  }

  return (
    <div className="flex flex-col items-center bg-gray-100 rounded p-3">
      <div className="flex flex-col mb-4">
        <p className="font-bold text-xl">LOGIN</p>
      </div>
      <div className="flex flex-col mb-3">
        <div className="flex flex-row items-center mb-5 px-3">
          <div className="pr-3 font-bold">USERNAME:</div>
          <div>
            <input type="text" 
            id="username"
            value="marcgarcia"
            className="p-1 rounded"
            onChange={(e) => setUsername(e.target.value)}/>
          </div>
        </div>
        <div className="flex flex-row items-center mb-2 px-3">
          <div className="pr-3 font-bold">PASSWORD:</div>
          <div>
            <input 
              type="text"
              id="password" 
              value="password" 
              className="p-1 rounded"
              onChange={(e) => setPassword(e.target.value)}/>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full mb-3"><hr/></div>
      <div className="flex flex-row w-full justify-evenly">
        <div className="
          bg-green-500 
          p-2 text-white 
          font-bold
          rounded
          cursor-pointer
          px-4">SIGN UP
        </div>
        <div className="
          bg-blue-500 
          p-2 text-white
          font-bold
          rounded
          cursor-pointer
          px-4" onClick={() => handleLogin()}>LOGIN
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    userSignIn: (username: string, password: string) => dispatch(actions.userSignInAsync(username, password))
  }
}

const mapStateToProps = (state: any):any => {
  return { user: state.user }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(LoginWindow);