import {
  WEATHER_API_FAILED,
  WEATHER_API_RECEIVED,
  WEATHER_API_REQUESTED,
} from "../consts";

const INITIAL_STATE = {
  loading: false,
  weather: undefined,
  error: undefined,
};

function weatherReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case WEATHER_API_REQUESTED: {
      return {
        ...state,
        error: undefined,
        loading: true,
      };
    }
    case WEATHER_API_RECEIVED: {
      return {
        ...state,
        weather: action.payload,
        error: undefined,
        loading: false,
      };
    }
    case WEATHER_API_FAILED: {
      return {
        ...state,
        error: action.payload,
        loading: false,
      };
    }
    default:
      return state;
  }
}

export default weatherReducer;
