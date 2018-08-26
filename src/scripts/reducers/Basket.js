import { BASKET } from "../constants/Basket";


let initialState = {
    basketFlowers: []
}

const addFlower = (state, payload) => {
	return {
		...state,
		basketFlowers: [
	...state.basketFlowers, payload
	]
	};

}
const removeFlower = (state, payload) => {
    return {
        ...state, basketFlowers: state.basketFlowers.filter(itm =>itm.id !== payload.id)
    };

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

