
import { combineReducers } from "redux";
import flowersReducer from "./Flowers";
import basketReducer from "./Basket";

const reducers = combineReducers({
    flowersStore: flowersReducer,
    basketStore: basketReducer
})

export default reducers;
