import React, { memo, useState } from 'react';
import { Button, Grid, Typography,TextField, FormControl, Avatar } from '@material-ui/core';
import { useStyles } from './styles';
import { connect } from 'react-redux';

import { registerUser } from 'src/store/actions/';
import { SCREEN_AUTH } from 'src/helpers/messageSource'
import Alert from 'src/components/MessageAlert'

const RegisterProfile = ({ dispatch, alert }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [cep, setCep] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');

  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(registerUser({ name, lastName, phone, cep, logradouro, bairro, city, number}));
   
  }


  return (
    <Grid container  
      direction="column" 
      justify="center" 
      alignItems="center" >
      <Grid item
        className={classes.box} >  
        <FormControl>
          <div>
            <Alert placeParam={SCREEN_AUTH.REGISTER} />
        
              <Grid container spacing={1}>
                <Grid item xs={12} sm={12}>
                  <Typography  component="h1" variant="h5">
                    Atualizar Perfil
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                  <div className={classes.btn2}>
                    <Button variant="contained" color="primary" className={classes.margin}>
                      Carregar Foto
                    </Button>
                  </div>
                </Grid>
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
                <Grid item xs={12} sm={12}>
                  <Typography component="SubTitle" variant="h5">
                    Endereços
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Cep"
                    name="cep"
                    variant="outlined"
                    value={cep}
                    required
                    fullWidth
                    id="cep"
                    label="Cep"
                    autoFocus
                    className={classes.field}
                    onChange={e => setCep(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Logradouro"
                    name="logradouro"
                    variant="outlined"
                    value={logradouro}
                    required
                    fullWidth
                    id="logradouro"
                    label="Logradouro/Rua"
                    autoFocus
                    className={classes.field}
                    onChange={e => setLogradouro(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Bairro"
                    name="bairro"
                    variant="outlined"
                    value={bairro}
                    required
                    fullWidth
                    id="bairro"
                    label="Bairro"
                    autoFocus
                    className={classes.field}
                    onChange={e => setBairro(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="City"
                    name="city"
                    variant="outlined"
                    value={city}
                    required
                    fullWidth
                    id="city"
                    label="Cidade"
                    autoFocus
                    className={classes.field}
                    onChange={e => setCity(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Number"
                    name="number"
                    variant="outlined"
                    value={number}
                    required
                    fullWidth
                    id="number"
                    label="Número"
                    autoFocus
                    className={classes.field}
                    onChange={e => setNumber(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="State"
                    name="state"
                    variant="outlined"
                    value={state}
                    required
                    fullWidth
                    id="state"
                    label="State"
                    autoFocus
                    className={classes.field}
                    onChange={e => setState(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Complement"
                    name="complement"
                    variant="outlined"
                    value={complement}
                    required
                    fullWidth
                    id="complement"
                    label="Complemento"
                    autoFocus
                    className={classes.field}
                    onChange={e => setComplement(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                    <Button
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={(e) => handleSubmit(e)}
                  >
                    Atualizar
                  </Button>
                </Grid>
              </Grid>
          </div>
        
        </FormControl>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
});

export default connect(mapStateToProps)(memo(RegisterProfile));