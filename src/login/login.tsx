import axios from 'axios';
import React, { Component, useState } from 'react';


const API_GATEWAY_URL = 'https://kolqsq8nrf.execute-api.us-east-1.amazonaws.com/dev';

function Login() { 
  const [username, setUsername] = useState("marcgarcia");
  const [password, setPassword] = useState("password");

  const clickEvent = () => {
    console.log('click event\n','user:',username,', password:',password);
    // api service call
    const reqBody = {'username': username, 'password': password}
    
    axios.post(`${API_GATEWAY_URL}/login`, reqBody)
    .then(res => {
      console.log('response returned from AWS: ', res.data);
    });
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
        <div className="flex flex-row items-center mb-5 px-3">
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
          px-4" onClick={() => clickEvent()}>LOGIN
        </div>
      </div>
    </div>
  );
}
export default Login;