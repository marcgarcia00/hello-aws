import React, { useState } from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

function CreateRoom(props: any) {
  const [name, setName] = useState("");

  const createClicked = () => {
    console.log('outgoing payload: ', name);
    props.createRoom(name);
  }
  
  return(
    <div className="flex flex-col h-1/2 w-full justify-center items-center">
      <div className="flex flex-col w-2/5 items-center shadow-lg bg-gray-100 rounded p-5">
        <div className="mb-5">
          <h3 className="text-xl font-bold tracking-wider">CREATE ROOM</h3>
        </div>
        <div className="mb-5 text-xl">
          <label htmlFor="name">Display Name</label>
          <input className="ml-3" name="name" type="text" onChange={(e) => setName(e.target.value)}/>
        </div>
        <div className="flex flex-col w-4/5 text-center">
          <div className="bg-green-400 p-3 w-full rounded text-white 
          font-bold tracking-wider cursor-pointer hover:bg-green-600"
          onClick={() => createClicked()}>CREATE ROOM</div>
        </div> 
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    createRoom: (displayName: string) => dispatch(actions.createRoomAsync(displayName))
  }
}

const mapStateToProps = (state: any): any => {
  return { room: state.room }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)
(CreateRoom);