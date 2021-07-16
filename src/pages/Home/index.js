import React from 'react';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { useStyles } from './styles'


export default function HomePage() {
  const classes = useStyles();

  return (
    <>
      <Container maxWidth="sm" component="main" position="" className={classes.heroContent}>
        <Typography component="h1"  variant="h4" align="left" color="textPrimary" gutterBottom> 
          Vamos conectá-lo ao melhor 
          profissional para você
        </Typography>
        <Grid item xs={12} sm={6}>
          <Link to="/register">
            <Button fullWidth className={classes.btn}>
              Quero me conectar 
            </Button>
          </Link>
        </Grid>
      </Container>
    </>
  );
}