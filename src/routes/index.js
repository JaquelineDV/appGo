import React  from 'react'
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from 'connected-react-router';

//import PrivateRoute from './privateRoute';

import history from '../services/history';

import MenuBar from 'src/components/MenuBar';
import PrivateRoute from 'src/routes/privateRoute';
import PublicRoute from 'src/routes/publicRoute';


import HomePage from 'src/pages/HomeUser';
import HomeUser from 'src/pages/HomeUser';
import AuthPages from 'src/pages/Auth'
import Negocios from 'src/pages/Business'
import Pag404 from 'src/pages/Pag404';
import ListVagas from 'src/components/Vagas';
import RegisterProfile from 'src/components/Profile/Form';

const Routes = () => {
  return (
    <>
        
      <MenuBar />
      <ConnectedRouter history={history}>
        <Switch>
          {/* <Route path="/" exact component={AppTask} />
          <Route path="/home" exact component={AppTask} /> */}
          
          <PublicRoute path="/" exact component={HomePage} /> 

          {/* Telas de Autenticação */}
          <Route path="/login"  component={AuthPages} />
          <Route path="/register"  component={AuthPages} />
          <Route path="/recuperarSenha"  component={AuthPages} />


          <PrivateRoute path="/negocios"component={Negocios} />

       
          <PrivateRoute path='/dash' component={HomeUser} />
          <PrivateRoute path='/atualizarPerfil' component={RegisterProfile} />

          
          <PrivateRoute path="/vagas"  component={ListVagas} />
          

          <Route path='*' exact={true} component={Pag404} />

        </Switch>
      </ConnectedRouter>
    </>
  );
};


export default Routes;