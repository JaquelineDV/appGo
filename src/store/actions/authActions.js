import { CONSTANTS, showMessageAlert, alertClean } from '../actions'
import { SCREEN_AUTH } from 'src/helpers/messageSource'
import { push } from 'connected-react-router';


import md5 from 'md5';

import { v4 as uuidv4 } from 'uuid';


export const singIn = (userSing) => (dispatch, getState) =>  {

  // carrego a lista do state
  const state = getState();
  const listUser = state.user.listUsers;

  console.log( " listUser" , listUser)
  console.log(" mail " , userSing)
  console.log(" listUser " , listUser)


  const findedUser = listUser.length > 0 ? listUser.find( u => u.mail === userSing.mail ) : null;
  
  console.log(" finded " , findedUser)
  // verifica se encontrou usuário com email
  if (!findedUser){
    dispatch(showMessageAlert({   
      message : 'Usuário não encontrado ',
      places : [SCREEN_AUTH.LOGIN, SCREEN_AUTH.REGISTER],
      type : 'warning'      
    }));
    return ;
  }

  // verifica se a senha do usuário encontrado é igual a senha digitada
  if (findedUser.password === md5(userSing.password)){
    
    dispatch(alertClean())
    dispatch({
      type: CONSTANTS.LOGIN_SUCCESS,
      payload : {
        user : findedUser
      }
    })


    // REDIRECIONAR PARA ROTA PRIVADA PADRÂO email
    // Neste caso sera o Home .com/
     dispatch(push('/dash'));

  } else {
    dispatch(showMessageAlert({   
      message : 'Senha inválida ',
      places : [SCREEN_AUTH.LOGIN, SCREEN_AUTH.REGISTER],
      type : 'warning'      
    }));
  }

 
  
}

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  localStorage.removeItem('expireIn');
  dispatch({
    type: CONSTANTS.LOGGED_OUT,
    payload: {}
  })
  dispatch(push('/login'));
}


export const registerUser = (userData) => (dispatch, getState) =>  {

  let haveError = {error : false, message : ''}

  if (!userData.mail){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe um e-mail.' }
  }

  if (!userData.name){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o nome.' }
  }

  if (!userData.lastName){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Sobre nome.' }
  }

  if (!userData.phone){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe um Telefone.' }
  }

  if (!userData.password && !userData.confPassword){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe as senhas.' } 
  } else {
    if (userData.password !== userData.confPassword){
      haveError = {...haveError, error : true, message : haveError.message + ' Verifique a senha.' }
    }
  }

  if ( haveError.error ){
    dispatch(showMessageAlert({   
      message : haveError.message,
      type : 'warning'      
    }));
    return 
  }

  const userFormated = {
    ...userData,
    id : uuidv4(),
    password : md5(userData.password),
  }


  dispatch({
    type: CONSTANTS.ADD_USER,
    payload : {
      user : userFormated
    }
  })

  dispatch(showMessageAlert({   
    message : 'Usuário cadastrado! ',
    places : [SCREEN_AUTH.LOGIN, SCREEN_AUTH.REGISTER],
    type : 'info'      
  }));

}