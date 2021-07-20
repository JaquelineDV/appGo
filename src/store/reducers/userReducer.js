import { CONSTANTS } from '../actions'

const initialState = {
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
  ]
}

const userReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CONSTANTS.ADD_USER: {
      const { user } = action.payload;

      const newListUser = [...state.listUsers, {...user}];

      console.log( " NEW LIST USER  ", newListUser)
      return { ...state, listUsers :  newListUser }
    }
    case CONSTANTS.LOGIN_SUCCESS:{
      const { user } = action.payload;

      return {
        ...state,
        isLoggedIn: true,
        userLogged: {...user}
      };

    }
    case CONSTANTS.LOGIN_FAILURE:
      return {
        ...state,
        isLoggedIn: false,
        user: action.payload.user
      };
    case CONSTANTS.LOGOUT:
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };
      default: {
        return state;
      }
    case CONSTANTS.GET_USER_BY_ID:
      return {
        ...state,
        isLoggedIn: true,
        edit: action.payload.edit,
      };
      
  }
};

export default userReducer;