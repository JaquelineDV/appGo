import { Button, Typography, Container } from '@material-ui/core';
import { useStyles } from './styles';

const Membros = () => {
  const classes = useStyles();


  return (
    <div className={classes.paper}>
      <Typography component="h1" variant="h5">
        Empresa Gooway
      </Typography>
      <Typography component="SubTitle" variant="p">
        Iniciado 14/07/2021
      </Typography>
      <Button variant="contained" size="large" className={classes.btn}>
        Membros
      </Button>
        
    </ div>, 
    <Container component="main" maxWidth="xs">
      <Typography component="p" variant="p" color="textSecondary">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum."
      </Typography>
      <div className="divBtn">
        <Button component="p" variant="p" size="medium" className={classes.btn}>
          Vizualizar
          (37) Vagas
        </Button>
        <Button component="p" variant="p" size="medium" className={classes.btn}>
          Vizualizar
          (7) Perguntas
        </Button>
      </div>
    </Container>
  );
}


export default (Membros);