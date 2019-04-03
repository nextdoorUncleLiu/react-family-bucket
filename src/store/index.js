import { createStore, combineReducers } from "redux";
import costListReducer from "./costList/reducer";
export default createStore(combineReducers({ costListReducer }));
