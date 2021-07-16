import React from 'react';
import { Grid }from '@material-ui/core';

import PrivateRoute from 'src/routes/privateRoute';

import UserLogin from 'src/components/DashUser';


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
        
        <PrivateRoute path="/dash" exact component={UserLogin} /> 

      </Grid>
    </Grid>

  );
}