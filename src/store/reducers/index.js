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
            id: '0',
            name : 'Jaqueline',
            lastName: 'Romao',
            mail: 'jaque@gmail.com',
            password: '202cb962ac59075b964b07152d234b70',
            address : {
              street : 'Jorge Matos', 
              burgh : 'Centro', 
              city : 'Catanduva', 
              number : '7', 
              complement : 'Casa', 
            },
            phone : { 
              type : 'Celular',
              country : '+55',
              number : '17997175000'
            }

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