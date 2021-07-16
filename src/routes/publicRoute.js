/* eslint-disable react/prop-types */
import { Redirect, Route } from 'react-router-dom';
// Vai fazer as rotas usando os componentes do react

import { isAuthenticated } from '../helpers/authenticated';

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !isAuthenticated() ? (
        <Component {...props} />
      ) : (
          // <Redirect to={{ pathname: '/apptask', state: { from: props.location } }} />
          <Redirect to={{ pathname: '/dash', state: { from: props.location } }} />

        )
    }
  />
);


export default PublicRoute;