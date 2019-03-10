import { combineReducers } from "redux";
import amtrakTrainsReducer from "./amtrakTrainsReducer";
import userTrainsReducer from "./userTrainsReducer";

const rootReducer = combineReducers({
  userTrains: userTrainsReducer,
  amtrakTrains: amtrakTrainsReducer
});

export default rootReducer;
