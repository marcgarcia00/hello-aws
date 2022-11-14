import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './actions';

function Home(props: any): any {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col mb-3 text-xl">{props.user.firstName ? ("Hi, " + props.user.firstName) : 'Welcome'}</div>
    <div className="flex flex-row items-between">
      <Link to="/create-room">
        <div 
        className="
          bg-red-400
          p-3
          rounded
          text-white
          text-2xl
          mr-3
          cursor-pointer"
        >CREATE ROOM</div>
      </Link>
      <Link to="/rooms">
        <div
        className="
          bg-blue-400
          p-3
          rounded
          text-white
          text-2xl
          cursor-pointer">ENTER ROOM</div>
      </Link>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch:any) => {
  return {
    increment: () => dispatch(actions.increment()),
    decrement: () => dispatch(actions.decrement())
  }
}

const mapStateToProps = (state:any):any => {
  return { 
    counter: state.counter,
    user: state.user
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Home);
