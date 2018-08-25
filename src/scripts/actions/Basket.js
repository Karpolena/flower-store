import { BASKET } from "../constants/Basket";

export const addFlower = (flowers) => {
    return {
        type: BASKET.ADD_FLOWER,
        payload: flowers
    }
}
export const removeFlower = (id) => {
    return {
        type: BASKET.REMOVE_FLOWER,
        payload: {id}
    }
}
