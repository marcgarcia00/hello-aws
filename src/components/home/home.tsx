import React from 'react';
import { connect } from 'react-redux';
import store from '../../store';
import * as actions from './actions';

function Home(props: any): any { 
  
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-col">Head</div>
      <div className="flex flex-row text-xl">
        <p>Counter:&nbsp;</p>
        <p>{props.counter.value}</p>
      </div>
    <div className="flex flex-row items-between">
        <div 
        className="
          bg-red-400
          p-3
          rounded
          text-white
          text-2xl
          mr-3
          cursor-pointer
        " onClick={() => props.decrement()}>-</div>
        <div
        className="
          bg-blue-400
          p-3
          rounded
          text-white
          text-2xl
          cursor-pointer
        " onClick={() => props.increment()}>+</div>
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
  return { counter: state.counter }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps  
)(Home);
