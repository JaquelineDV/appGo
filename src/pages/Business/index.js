import React from 'react';
import { Grid }from '@material-ui/core';

import { useStyles } from './style';

import PrivateRoute from 'src/routes/privateRoute';

import SimpleCard from 'src/components/Business/Card';
import FormBusiness from 'src/components/Business/Form';
import Membros from 'src/components/Business/Membros';


export default function Negocios() {
  const classes = useStyles();

  return (
    <Grid container
      spacing={2}  
      direction="column" 
      justify="center" 
      alignItems="center" >
   
          
      <Grid item >      
          <PrivateRoute path="/negocios/id" exact component={SimpleCard} />
      </Grid>

      <Grid item className={classes.box} >   
          
          <PrivateRoute path="/negocios/cadastro" exact  component={FormBusiness} />
          <PrivateRoute path="/negocios/membros" exact component={Membros} />
      </Grid>
          
     
          
 
    </Grid>

  );
}