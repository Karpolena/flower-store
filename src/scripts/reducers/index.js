
import { combineReducers } from "redux";
import flowersReducer from "./Flowers";

const reducers = combineReducers({
    flowersStore: flowersReducer
})

export default reducers;
