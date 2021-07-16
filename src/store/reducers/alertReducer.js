import { CONSTANTS } from "../actions";

const initialState = {
  message : '',
  places: [],
  type : ''
};

const areaReducer = (state = initialState, action) => {
  switch (action.type) {

    case CONSTANTS.SHOW_ALERT_MESSAGE: {
      const { alert } = action.payload;

      return { ...state,  ...alert};
    }
  
    case CONSTANTS.ALERT_CLEAN: {
      return { ...state,  message : '', places : [], type : ''  };
    }

    default:
      return state;
  }
};

export default areaReducer;
