import { combineReducers } from "redux";
import Reducerjs from "./reducer";

const reducer = combineReducers({
  textField: Reducerjs,
});

export default reducer;
