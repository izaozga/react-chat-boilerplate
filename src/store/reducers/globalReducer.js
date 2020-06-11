import { SET_USERNAME } from "../consts";

const INITIAL_STATE = {
  username: "john doe",
};

function globalReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SET_USERNAME: {
      return {
        ...state,
        username: action.payload,
      };
    }
    default:
      return state;
  }
}

export default globalReducer;
