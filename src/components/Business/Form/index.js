import {useState } from 'react';
import {
  Button,
  FormControl,
  TextField,
  Typography,
} from '@material-ui/core';
import { useStyles } from './styles'


const FormBusiness = ({ dispatch, alert }) => {
  const classes = useStyles();

  const [name, setName] = useState('');
  const [describle, setDescrible] = useState('');
  const [area, setArea] = useState('');


  //const handleSubmit = (event) => {

  //  event.preventDefault();
  //  dispatch(alertClean());
   // dispatch(singIn({ mail, password}));
   // console.log(mail, password)
  //}



  return (
 
  
        <FormControl>
          <div className={classes.paper}>

            <Typography component="h1" variant="h5">
              Registro de Negócio
            </Typography>

            <div className={classes.form} >

              <TextField
                  variant="outlined"
                  margin="normal"
                  type="text"
                  required
                  fullWidth
                  id="name"
                  value={name}
                  label="Nome do negócio"
                  name="name"
                  autoComplete="name"
                  autoFocus
                  onChange={event => {
                    setName(event.target.value);
                  }}
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={describle}
                  name="describle"
                  label="Descrição do negócio"
                  type="describle"
                  id="describle"
                  onChange={event => {
                    setDescrible(event.target.value);
                  }}
              />
              <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  value={area}
                  name="area"
                  label="Área do negócio"
                  type="area"
                  id="area"
                  onChange={event => {
                    setArea(event.target.value);
                  }}
              />
              <Button
                 // onClick={(e) => handleSubmit(e)}
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
              >
                Salvar Negócio
              </Button>
            </div>
          </div>
        </FormControl>
       
  );
}

export default (FormBusiness);