import React from 'react';
import { Grid }from '@material-ui/core';

import { useStyles } from './styles';

import PrivateRoute from 'src/routes/privateRoute';

import SimpleCard from 'src/components/Business/Card';
import FormBusiness from 'src/components/Business/Form';
import Empresa from 'src/components/Business/Description';


export default function Negocios() {
  const classes = useStyles();

  return (
    <Grid container
      spacing={2}  
      direction="column" 
      justify="center" 
      alignItems="center" >
   
          
      <Grid item className={classes.boxCard}>      
          <PrivateRoute path="/negocios/id" exact component={SimpleCard} />
      </Grid>

      {/*
        
          <PrivateRoute path="/negocios/description" exact component={menu 1 Empresa} />
      
      */}

      <Grid item className={classes.box} >   
          
          <PrivateRoute path="/negocios/cadastro" exact  component={FormBusiness} />
          <PrivateRoute path="/negocios/description" exact component={Empresa} />
      </Grid>
          
     
          
 
    </Grid>

  );
}