import { Button, Typography, Grid} from '@material-ui/core';
import { useStyles } from './styles';

import { useHistory } from 'react-router-dom';


const Empresa = () => {
  const classes = useStyles();

  const history = useHistory();

  const redirectMenu = (url) => {
    history.push(url);
  }

  return (
    <Grid container>
      <Grid item xs={12} sm={6} className={classes.paper}>
            <Typography component="h1" variant="h5">
              Empresa Gooway
            </Typography>
            <Typography component="SubTitle" variant="p">
              Iniciado 14/07/2021
            </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Button variant="contained" size="large" onClick={() => redirectMenu('/membros')} className={classes.btn}>
          Membros
        </Button>
      </Grid>
        <Grid item className={classes.text}>
          <Typography component="p" variant="p" color="textSecondary">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </Typography>
        </Grid>
        <Grid item className={classes.text}>
          <Typography variant="p">
            Àreas: Informação, Tecnologia.
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} sm={6} >
              <Button component="p" variant="p" size="medium" className={classes.btn}>
                Vizualizar (37) Vagas
              </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
              <Button component="p" variant="p" size="medium" className={classes.btn}>
                Vizualizar (7) Perguntas
              </Button>
          </Grid>
        </Grid>
    </Grid>
  );
}


export default (Empresa);