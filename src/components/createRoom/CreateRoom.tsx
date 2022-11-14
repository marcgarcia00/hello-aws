import React from 'react';

function CreateRoom() {
  return(
    <div className="flex flex-col w-full justify-center items-center">
      <div className="flex flex-col w-2/5 items-center shadow-lg bg-gray-100 rounded p-5">
        <div className="mb-5">
          <h3 className="text-xl font-bold tracking-wider">CREATE ROOM</h3>
        </div>
        <div className="mb-5">
          <label htmlFor="name">Name: </label>
          <input className="ml-3" name="name" type="text"/>
        </div>
        <div>
          <div className="mb-3">
            <label htmlFor="card">Card Title: </label>
            <input className="ml-3" name="card" type="text"/>
          </div>
          <div className="mb-3">
            <label htmlFor="card">Card Description: </label>
            <input className="ml-3" name="card" type="text"/>
          </div>
          <div className="text-end text-blue-600">
          <p className="cursor-pointer">Add Card +</p>
        </div>
        </div>
        <div className="self-end">
          <div className="bg-green-400 p-3 rounded text-white font-bold tracking-wider cursor-pointer">CREATE ROOM</div>
        </div>
      </div>
    </div>
  );
}
export default CreateRoom;