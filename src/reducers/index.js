import { combineReducers } from "redux";
import city from "./city";
import favorites from "./favorites";
import alerts from "./alert";

export default combineReducers({
  city,
  favorites,
  alerts
});
