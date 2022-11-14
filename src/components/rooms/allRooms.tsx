import React from 'react';
import { Link } from 'react-router-dom';

function Rooms() {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <div className="flex flex-col mb-5">
        <div>ALL ROOMS</div>
      </div>
      <div className="flex flex-col w-1/2 items-center bg-blue-400 shadow-xl">
        <div className="flex flex-row w-full justify-evenly text-white"> 
          <div className="flex flex-col">ROOM NAME</div>
          <div className="flex flex-col">DATE CREATED</div>
          <div className="flex flex-col">&nbsp;</div>
        </div>
        <div className="flex flex-row w-full items-center py-3 justify-evenly bg-white">
          <div className="flex flex-col">TEST ROOM</div>
          <div className="flex flex-col">TEST DATE</div>
          <div className="flex flex-col">
            <Link to="/room">
              <div className="bg-green-500 px-3 py-1 rounded self-end text-white">ENTER</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Rooms;