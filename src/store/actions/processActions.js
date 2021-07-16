import { CONSTANTS } from '.';

export const addText = (fields) => dispatch => {
  dispatch ({
    type: CONSTANTS.ADD_FIELD_PROCESS,
    payload:{ fields }
  });
};