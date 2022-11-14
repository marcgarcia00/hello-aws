import React from 'react';
import { Route, Routes } from 'react-router-dom';
import CreateRoom from './components/createRoom/CreateRoom';
import Home from './components/home/Home';
import Login from './components/login/Login';
import Room from './components/room/room';
import Rooms from './components/rooms/allRooms';

const RoutePaths = () => {
  return (
  <Routes>
    <Route path="/" index element={ <Login/> }/>
    <Route path="/room" element={ <Room/> }/>
    <Route path="/home" element={ <Home/> }/>
    <Route path="/create-room" element={ <CreateRoom/> }/>
    <Route path="/rooms" element={ <Rooms/> }/>
  </Routes>
  );
}
export default RoutePaths;