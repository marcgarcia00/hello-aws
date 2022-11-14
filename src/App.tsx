import { connect } from 'react-redux';
import MenuBar from './components/menuBar';
import RoutePaths from './RoutePaths';
import { HyperlinkProps } from './components/menuBar';

function App(props: any) {

  let hyperLinks: HyperlinkProps [] = [
    { display: 'HOME', link: '/home'},
    { display: 'ROOM', link: '/room'}
  ];
  let displayAuth = props.user.isAuthenticated ? { display: 'LOGOUT', link: '/'} : { display: 'LOGIN', link: '/'}
  hyperLinks.push(displayAuth);
  return (
    <div className="App flex flex-col">
      <MenuBar hyperlinks={hyperLinks}/>
      <RoutePaths/>
    </div>
  );
}

const mapStateToProps = (state: any): any => {
  return { user: state.user}
}

export default connect(
  mapStateToProps
)(App);
