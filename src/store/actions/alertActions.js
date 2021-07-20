import { CONSTANTS } from '../actions';

export const showMessageAlert = (alert) => {
  /* TYPES 
    "error"
    "warning"
    "info"
    "success"
    */
  return {
    type: CONSTANTS.SHOW_ALERT_MESSAGE,
    payload: {
      alert
    }
  };
}

export const alertClean = () => {
  return {
    type: CONSTANTS.ALERT_CLEAN
  };
}


