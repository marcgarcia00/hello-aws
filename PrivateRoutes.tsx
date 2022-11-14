import { Component, ReactElement } from 'react';
import { Route, Navigate } from 'react-router-dom';

function PrivateRoute({ component: Component, location:string, ...rest }) {
    let auth = false;
    return (
      <Route {...rest} element={(component) => {
        if (!auth) {
            return <Navigate to={ props.location } />
        }
        // authorized so return component
        return <Component {...props} />
      }} />
    );
}
export default PrivateRoute;