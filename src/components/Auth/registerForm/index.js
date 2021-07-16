import React, { memo, useState } from 'react';
import { Button, Grid, Typography,TextField, Container } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';
import { connect } from 'react-redux';

import { registerUser } from 'src/store/actions/';
import { SCREEN_AUTH } from 'src/helpers/messageSource'
import Alert from 'src/components/MessageAlert'

const Register = ({ dispatch, alert }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mail, setMail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(registerUser({ name, lastName, mail, phone, password, confPassword}));
   
  }


  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          Criar a sua conta da Gowaay
        </Typography>
        <Alert placeParam={SCREEN_AUTH.REGISTER} />
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="name"
                name="Name"
                variant="outlined"
                value={name}
                required
                fullWidth
                id="Name"
                label="Name"
                autoFocus
                className={classes.field}
                onChange={e => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                value={lastName}
                required
                fullWidth
                id="sobreNome"
                label="Sobre nome"
                name="sobreNome"
                autoComplete="sobreNome"
                className={classes.field}
                onChange={e => setLastName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={mail}
                required
                fullWidth
                id="email"
                label="Endereço de Email"
                name="email"
                autoComplete="email"
                className={classes.field}
                onChange={e => setMail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                value={phone}
                required
                fullWidth
                name="telefone"
                label="Telefone"
                type="telefone"
                id="telefone"
                autoComplete="telefone"
                className={classes.field}
                onChange={e => setPhone(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Password"
                name="password"
                variant="outlined"
                value={password}
                required
                fullWidth
                id="password"
                label="Senha"
                autoFocus
                className={classes.field}
                onChange={e => setPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="Confirmação"
                name="Confirmação"
                variant="outlined"
                value={confPassword}
                required
                fullWidth
                id="Confirmação"
                label="Confirmação"
                autoFocus
                className={classes.field}
                onChange={e => setConfPassword(e.target.value)}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
                <Button
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={(e) => handleSubmit(e)}
              >
                Registrar
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Link to="login">
                <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onSubmit={(e) => e.preventDefault()}
                >
                  Fazer Login
                </Button>
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
});

export default connect(mapStateToProps)(memo(Register));