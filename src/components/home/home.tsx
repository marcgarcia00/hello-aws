import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import CardList from '../cards/cards';
import * as actions from './actions';

function Home(props: any): any {
  console.log('state: ', props.user);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">{props.user.isAdmin ? 'ADMIN': 'USER'}</div>
      <div className="flex flex-row text-xl">
        <p>Counter:&nbsp;</p>
        <p>{props.counter.value}</p>
      </div>
    <div className="flex flex-row items-between">
      <Link to ="/room">
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
        <div
        className="
          bg-blue-400
          p-3
          rounded
          text-white
          text-2xl
          cursor-pointer
        " onClick={() => props.increment()}>ENTER ROOM</div>
      </div>
      <div className="flex flex-col border rounded border-gray-600 border-solid p-3">
        <CardList/>
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
