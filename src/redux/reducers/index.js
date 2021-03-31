import { combineReducers } from "redux";
import counter from "./counterReducer";
import user from "./userReducer";
import todo from "./todoReducer";

export default combineReducers({
    counter,
    user,
    todo
});