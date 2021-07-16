// import store from index
import { store } from 'src/'

const isAuthenticated = () => {

  const states = store.getState(); 

  const userState = states.user;

  return userState.isLoggedIn;
}

export { isAuthenticated };