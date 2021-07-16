import {memo, useState } from 'react';
import {
  Button,
  FormControl,
  FormControlLabel,
  TextField,
  Grid,
  Checkbox, 
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles'
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { singIn,  alertClean } from 'src/store/actions/';

import { SCREEN_AUTH } from 'src/helpers/messageSource'
import Alert from 'src/components/MessageAlert'

const Login = ({ dispatch, alert }) => {
  const classes = useStyles();

  const [mail, setMail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(alertClean());
    dispatch(singIn({ mail, password}));
    console.log(mail, password)
  }



  return (
 
  
        <FormControl>
          <div className={classes.paper}>

            <Typography component="h1" variant="h5">
              Login
            </Typography>

            <div className={classes.form} >
              <Alert placeParam={SCREEN_AUTH.LOGIN} />

              <TextField
                  variant="outlined"
                  margin="normal"
                  type="text"
                  required
                  fullWidth
                  id="mail"
                  value={mail}
                  label="Email"
                  name="mail"
                  autoComplete="mail"
                  autoFocus
                  onChange={event => {
                    setMail(event.target.value);
                    dispatch(alertClean());
                  }}
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={password}
                  name="password"
                  label="Senha"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  onChange={event => {
                    setPassword(event.target.value)
                    dispatch(alertClean());
                  }}
              />
              <FormControlLabel
                  control={<Checkbox value="remember" color="primary" />}
                  label="Permanecer conectado"
              />
              <Button
                  onClick={(e) => handleSubmit(e)}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link to="/recuperarSenha" variant="body2">
                    Esqueci minha senha
                  </Link>
                </Grid>
                <Grid item>
                  <Link to="/register" variant="body2">
                    {"Não tem uma conta? Cadastre-se"}
                  </Link>
                </Grid>
              </Grid>
            </div>
          </div>
        </FormControl>
       
  );
}



const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
});

export default connect(mapStateToProps)(memo(Login));