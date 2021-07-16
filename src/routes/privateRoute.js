/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
// Vai fazer as rotas usando os componentes do react

import { isAuthenticated } from '../helpers/authenticated';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      isAuthenticated() ? (
        <Component {...props} />

      ) : (

          <>
            {/* {localStorage.removeItem('token')}
            {localStorage.removeItem('expireIn')} */}
            

            <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
          </>

        )
    }
  />
);


export default PrivateRoute;
