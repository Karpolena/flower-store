import { FLOWERS } from "../constants/Flowers";

let initialState = {
    flowers: [],
    flower: null
}

const setFlowers = (state, payload) => {
    state.flowers = [...payload.flowers];
    return {...state};
}

const setFlower = (state, payload) => {
    state.flower = payload.flower;
    return {...state};
}

const flowersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLOWERS.SET_FlOWERS:
            return setFlowers(state, action.payload);
        case FLOWERS.SET_FLOWER:
            return setFlower(state, action.payload);
        default: return state;
    }
}
export default flowersReducer;
