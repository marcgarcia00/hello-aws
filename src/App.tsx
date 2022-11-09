import React from 'react';
import './App.css';
import Login from './login/login';

function App() {
  return (
    <div className="App flex flex-col items-center justify-center">
      <div className="flex flex-col w-full bg-blue-400 p-2 mb-5">
        <h3 className='text-3xl'>Planning Poker</h3>
      </div>
      <div className="flex flex-col"><Login/></div>
    </div>
  );
}

export default App;
