import { BASKET } from "../constants/Basket";

export const addFlower = (payload) => {
    return {
        type: BASKET.ADD_FLOWER,
        payload
    }
}
export const removeFlower = (id) => {
    return {
        type: BASKET.REMOVE_FLOWER,
        payload: {id}
    }
}
