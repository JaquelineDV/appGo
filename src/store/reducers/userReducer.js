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
      name : 'Jaqueline',
      lastName: 'Romao',
      mail: 'jaque@gmail.com',
      phone: '17997175000',
      password: '123',
      address : '', 
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
  }
};

export default userReducer;