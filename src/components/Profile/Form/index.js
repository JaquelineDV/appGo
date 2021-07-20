import React, { memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Typography,TextField, Avatar } from '@material-ui/core';
import MuiPhoneNumber from "material-ui-phone-number";
import { useStyles } from './styles';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';


import { editUser } from 'src/store/actions/';
import { SCREEN_AUTH } from 'src/helpers/messageSource'
import Alert from 'src/components/MessageAlert'


const RegisterProfile = ({ dispatch, userState }) => {
  
  const history = useHistory();

  const classes = useStyles();

  const [name, setName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [address, setAddress] = useState('');
  const [burgh, setBurgh] = useState('');
  const [city, setCity] = useState('');
  const [number, setNumber] = useState('');
  const [state, setState] = useState('');
  const [complement, setComplement] = useState('');
 

  const handlePhoneChange = (value) => {
    setPhone({phone : value});
  }

  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(editUser({ name, lastName, phone, postalCode, address, burgh, city, number, state, complement}));
   
  }

  const redirectMenu = (url) => {
    history.push(url);
  }


  return (
    <Grid container  
      direction="column" 
      justify="center" 
      spacing={2}
      alignItems="center" >
      <Grid item
        className={classes.box} >  
          <div>
            <Alert placeParam={SCREEN_AUTH.USER} />
        
              <Grid container spacing={2}>
                <Grid item xs={12} sm={12}>
                  <Typography  component="h1" variant="h5">
                    Atualizar Perfil
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" className={classes.large} />
                  <div >
                    <Button variant="contained" color="primary" className={classes.submit}>
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
                  >
                    {userState.listUsers.name}
                  </TextField>
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
                <Grid item xs={12} sm={6}>
                  <MuiPhoneNumber
                    preferredCountries={["br"]}
                    disableAreaCodes={true}
                    defaultCountry={"br"}
                    variant="outlined"
                    type="Telefone"
                    value={phone}
                    id="telefone"
                    autoComplete="telefone"
                    className={classes.phone}
                    onChange={handlePhoneChange}
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <Typography component="SubTitle" variant="h5">
                    Endereços
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="PostalCode"
                    name="postalCode"
                    variant="outlined"
                    value={postalCode}
                    required
                    fullWidth
                    id="postalCode"
                    label="Cep"
                    autoFocus
                    className={classes.field}
                    onChange={e => setPostalCode(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Address"
                    name="address"
                    variant="outlined"
                    value={address}
                    required
                    fullWidth
                    id="address"
                    label="Logradouro/Rua"
                    autoFocus
                    className={classes.field}
                    onChange={e => setAddress(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="Burgh"
                    name="burgh"
                    variant="outlined"
                    value={burgh}
                    required
                    fullWidth
                    id="burgh"
                    label="Bairro"
                    autoFocus
                    className={classes.field}
                    onChange={e => setBurgh(e.target.value)}
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
                    label="Estado"
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
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                    onClick={() => redirectMenu('/alterarSenha')}
                  >
                    Alterar Senha
                  </Button>
                </Grid>
                <Grid item xs={12}>
                    <Button
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
        
      </Grid>
    </Grid>
  );
}

RegisterProfile.propTypes = {
  dispatch : PropTypes.func,
  userState : PropTypes.object,
}

const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
  userState : state.user,
});

export default connect(mapStateToProps)(memo(RegisterProfile));