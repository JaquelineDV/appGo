import React from 'react';
import { Grid }from '@material-ui/core';

import PublicRoute from 'src/routes/publicRoute';

import LoginForm from 'src/components/Auth/loginForm';
import RegisterForm from 'src/components/Auth/registerForm';
import LostPasswordForm from 'src/components/Auth/lostPasswordForm';

import { useStyles } from './style';

export default function Home() {
  const classes = useStyles();


  return (

    <Grid container  
          direction="column" 
          justify="center" 
          alignItems="center" >

      <Grid item
           className={classes.box} >      
               
              <PublicRoute path="/login" exact component={LoginForm} />
              <PublicRoute path="/register" exact component={RegisterForm} />
              <PublicRoute path="/recuperarSenha" exact component={LostPasswordForm} />
      
      </Grid>  

     
    </Grid>  

  );
}