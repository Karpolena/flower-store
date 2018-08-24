import { BASKET } from "../constants/Basket";

let initialState = {
    basketFlowers: [],
    basketFlowerId: [],
    count: 0
}

const addFlower = (state, payload) => {
    state.basketFlowers.push(payload);
    return {...state}

}
const removeFlower = (state, payload) => {
    state.basketFlowers = state.basketFlowers.filter(itm => itm.id !== payload.id);
    return {...state}

}

const basketReducer = (state = initialState, action) => {
    switch(action.type) {
        case BASKET.ADD_FLOWER:
            return addFlower(state, action.payload);
        case BASKET.REMOVE_FLOWER:
            return removeFlower(state, action.payload);
        default: return state;
    }
}
export default basketReducer;

