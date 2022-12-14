import { combineReducers } from "redux";
import locationReducer from "./locationReducer";

const rootReducer = combineReducers({
  data: locationReducer,
});

export default rootReducer;
