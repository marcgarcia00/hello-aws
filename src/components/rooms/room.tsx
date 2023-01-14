import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import CardList from '../cards/cards';

function SampleRoom(props: any):any {

  return(
    <div className='flex flex-row w-full h-full p-5 justify-center'>
      <div className='flex flex-col w-4/5 items-center p-5 border rounded mx-4'>
        <div className="flex w-3/4 flex-col mb-5 text-center">
          <div className='text-2xl'>CARD TITLE</div>
          <div>[Card Description Will Live Here]</div>
        </div>
        <div className='w-full mb-5'>
          <hr/>
        </div>
        <div className='flex flex-col'>
          <div className='flex flex-col'>
            <CardList/>
          </div>
        </div>
      </div>
      <div className="flex flex-col h-full w-1/5 items-center p-5 border">
        USERS
      </div>
    </div>
  );
}

// const mapDispatchToProps = (dispatch: any) => {
//   return {
//     setVote: (vote: any) => dispatch()
//   }
// }

const mapStateToProps = (state: any) => {
  return {
    user: state.user,
    room: state.room
  }
}
export default connect(
  mapStateToProps
)(SampleRoom);