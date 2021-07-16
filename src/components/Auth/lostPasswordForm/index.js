import { Grid, TextField, Button, Typography, Container } from '@material-ui/core';
import { useStyles } from './styles'

import { Link } from 'react-router-dom';

const RecuperarSenha = () => {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="xs">

      <Grid Container  justify="center" direction="column" alignItems="stretch" >
        <Grid item>
          <Grid Container spacing={2}>
        
            <div className={classes.paper}>

              <Typography component="h1" variant="h5">
                Problemas para entrar?
              </Typography>

              <div className={classes.form} >
                <Typography component="p" variant="p">
                  Insira o seu email cadastrado e enviaremos um link para você voltar a acessar a sua conta.
                </Typography>
                <TextField
                  variant="outlined"
                  margin="normal"
                  type="text"
                  required
                  fullWidth
                  id="email"
                  label="Endereço de Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={e => (e.target.value)}
                />
                <Button
                  onClick={(e) => (e.preventDefault())}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                >
                  Enviar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/login" variant="body2">
                      Voltar a página de Login
                    </Link>
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default (RecuperarSenha);