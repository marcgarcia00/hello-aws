import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import CreateRoom from './components/createRoom/CreateRoom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Room from './components/room/room';
import Rooms from './components/rooms/allRooms';

const RoutePaths = (props: any):any => {
  let redirect = <Routes><Route path="/" element={ <Navigate to="/" /> } /></Routes>;
  let routes = [
    <Routes>
      <Route path="/" element={ <Login/> }/>
      <Route path="/room" element={ <Room/> }/>
      <Route path="/home" element={ <Home/> }/>
      <Route path="/create-room" element={ <CreateRoom/> }/>
      <Route path="/rooms" element={ <Rooms/> }/>
    </Routes>
  ];
  // let redirect = <Route path="/" element={ <Navigate to="/" /> } />;
  // let routes = [
  //   <>
  //   <Route path="/" element={ <Login/> }/>
  //   <Route path="/room" element={ <Room/> }/>
  //   <Route path="/home" element={ <Home/> }/>
  //   <Route path="/create-room" element={ <CreateRoom/> }/>
  //   <Route path="/rooms" element={ <Rooms/> }/>
  //   </>
  // ];
  //   <Routes>
  //     { props.isAuthenticated ? routes : redirect }
  //   </Routes>
  return routes;
}
export default RoutePaths;