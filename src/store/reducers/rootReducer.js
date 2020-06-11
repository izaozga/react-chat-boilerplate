import { combineReducers } from "redux";
import globalReducer from "./globalReducer";
import weatherReducer from "./weatherReducer";

export default combineReducers({
  globalReducer: globalReducer,
  weatherReducer: weatherReducer,
});
