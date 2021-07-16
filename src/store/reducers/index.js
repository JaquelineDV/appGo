import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import history from '../../services/history';

import ProcessReducer from "./processReducer";
import UserReducer from "./userReducer";
import AlertReducer from './alertReducer';



const appReducer = combineReducers({
  process: ProcessReducer,
  user :  UserReducer,
  alert : AlertReducer,
  router: connectRouter(history)
});

const rootReducer = (state, action) => {

  if (action.type === 'LOGGED_OUT') {

    // Caso queira manter algo é só armazenar e passar no state
    // exemplo as notificações. É só pegar no combine
    // const { notifications } = state;
    // state = { notification } // e passa para o state o valor armazenado apenas

    state = {
      user:  {
        isLoggedIn: false,
        token: false,
        userLogged: {
          name:'', 
          lastName: '',
          mail: ''
        },
        listUsers : [
          {
            name : 'Jaqueline',
            lastName: 'Romao',
            mail: 'jaque@gmail.com',
            phone: '17997175000',
            password: '123',
          }
        ],
        alert : {
          message : '',
          places: [],
          type : ''
        }        
      },
      process : {
        
      }
    };
  }
  
  return appReducer(state, action);
};

export default rootReducer;