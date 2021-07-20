import {memo, useState } from 'react';
import {
  Button,
  TextField,
  Typography,
  Grid,
} from '@material-ui/core';
import { useStyles } from './styles'
import { connect } from 'react-redux';



import { updatePassword } from 'src/store/actions/';
import { SCREEN_AUTH } from 'src/helpers/messageSource'
import Alert from 'src/components/MessageAlert'
import { alertClean } from 'src/store/actions/';

const ChangePassword = ({ dispatch}) => {
  const classes = useStyles();

  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');


  const handleSubmit = (event) => {

    event.preventDefault();
    dispatch(updatePassword({ password, newPassword, confPassword}));
  }



  return (
 
  
        <Grid container spacing={2} className={classes.box}>
            <Grid item>
              <Typography component="h1" variant="h5">
                Alteração de Senha
              </Typography>
            </Grid>
            <Grid container >
              <div className={classes.form} >
                <Alert placeParam={SCREEN_AUTH.LOGIN} />
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                  <TextField
                      variant="outlined"
                      margin="normal"
                      type="text"
                      required
                      fullWidth
                      id="newPassword"
                      value={newPassword}
                      label="Nova Senha"
                      name="newPassword"
                      autoComplete="newPassword"
                      autoFocus
                      onChange={event => {
                        setNewPassword(event.target.value);
                        dispatch(alertClean());
                      }}
                  />
                </Grid>
                <Grid item xs={12}>
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
                <Button
                    onClick={(e) => handleSubmit(e)}
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                >
                  Gerar nova Senha
                </Button>
              </div>
            </Grid>
        

        </Grid>
       
  );
}



const mapStateToProps = state => ({
  users: state.users,
  alert: state.alerts,
});

export default connect(mapStateToProps)(memo(ChangePassword));