export * from './processActions';
export * from './alertActions';
export * from './authActions';



export const CONSTANTS = {
  // USER CONSTANTS
  ADD_USER : 'ADD_USER',

  //
  ADD_FIELD_PROCESS : 'ADD_FIELD_PROCESS',

  // ALERTS COMMANDS 
  SHOW_ALERT_MESSAGE : 'SHOW_ALERT_MESSAGE',
  ALERT_CLEAN: 'ALERT_CLEAN',

   // Auth
  SINGIN: 'SINGIN',
  LOGIN_SUCCESS: 'LOGIN_SUCCESS',
  LOGGED_OUT: 'LOGGED_OUT',

  GET_USER_BY_ID: 'GET_USER_BY_ID',
}