import React from 'react';
import { connect } from 'react-redux';
import MenuBar from './components/menuBar';
import RoutePaths from './RoutePaths';
import { HyperlinkProps } from './components/menuBar';
import * as actions from './components/login/actions';

function App(props: any) {

  let hyperLinks: HyperlinkProps [] = [
    { display: 'HOME', linkClicked: () => redirect('/home') },
    { display: 'ROOM',  linkClicked: () => redirect('/room')}
  ];

  const redirect = (location: string): any => {
    window.location.href = location;
  }

  console.log('STATE: ', props);
  let displayAuth = { display: 'LOGOUT', link: '/', linkClicked: () => props.logout() }
  hyperLinks.push(displayAuth);

  return (
    <div className="App flex flex-col">
      <MenuBar hyperlinks={hyperLinks}/>
      <RoutePaths isAuthenticated={ ( props.user && props.user.isAuthenticated) }/>
    </div>
  );
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    logout: () => dispatch(actions.logout())
  }
}

const mapStateToProps = (state: any): any => {
  return { user: state.user}
}

export default connect(
  mapDispatchToProps,
  mapStateToProps
)(App);
