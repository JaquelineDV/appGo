import { CONSTANTS } from '../actions'

const initialState = {
  activated: {
  },
}

const processReducer = (state = initialState, action) => {
  // eslint-disable-next-line default-case
  switch (action.type) {
    case CONSTANTS.ADD_FIELD_PROCESS: {
      const { fields } = action.payload;

      return { ...state, activated : { ...state.activated, ...fields}  }
    } default : {
      return state;
    }
  }
};

export default processReducer;