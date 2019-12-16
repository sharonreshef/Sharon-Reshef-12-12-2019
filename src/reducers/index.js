import { combineReducers } from "redux";
import city from "./city";
import favorites from "./favorites";

export default combineReducers({
  city,
  favorites
});
