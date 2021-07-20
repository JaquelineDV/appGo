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

export const editUser = (userData) => (dispatch) =>  {

  let haveError = {error : false, message : ''}

  if (!userData.name){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o nome.' }
  }

  if (!userData.lastName){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Sobre nome.' }
  }

  if (!userData.phone){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe um Telefone.' }
  } else if ((userData.phone || "")|| (userData.length < 11)){
    haveError = {...haveError, error : true, message : haveError.message + ' Número de telefone inválido, deve conter no mínimo 10 dígitos' }
  }

  if (!userData.postalCode){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Cep.' }
  }

  if (!userData.address){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Endereço.' }
  }


  if (!userData.burgh) {
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Bairro.' } 
  } 

  if (!userData.city) {
    haveError = {...haveError, error : true, message : haveError.message + ' Informe a Cidade.' } 
  } 

  if (!userData.number) {
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Número.' } 
  } 

  if (!userData.state) {
    haveError = {...haveError, error : true, message : haveError.message + ' Informe o Estado.' } 
  } 

  if ( haveError.error ){
    dispatch(showMessageAlert({   
      message : haveError.message,
      type : 'warning'      
    }));
    return 
  }

  console.log(userData)
  dispatch({
    type: CONSTANTS.GET_USER_BY_ID,
    payload : {
      user: userData
    }
       
  })

  dispatch(showMessageAlert({   
    message : 'Usuário Atualizado! ',
    places : [SCREEN_AUTH.LOGIN, SCREEN_AUTH.REGISTER, SCREEN_AUTH.USER],
    type : 'info'      
  }));

};

export const updatePassword = (userChange) => (dispatch) => {

  let haveError = {error : false, message : ''}


  if (!userChange.password && !userChange.newPassword && !userChange.confPassword){
    haveError = {...haveError, error : true, message : haveError.message + ' Informe as senhas.' } 
  } else {
    if (userChange.newPassword !== userChange.confPassword){
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
    ...userChange,
    id : uuidv4(),
    newPassword : md5(userChange.newPassword),
  }

  dispatch({
    type: CONSTANTS.ADD_USER,
    payload : {
      user : userFormated
    }
  })

  dispatch(showMessageAlert({   
    message : 'Senha Atualizada! ',
    places : [SCREEN_AUTH.LOGIN, SCREEN_AUTH.REGISTER, SCREEN_AUTH.USER],
    type : 'info'      
  }));

};