import { FLOWERS } from '../constants/Flowers';

export const getFlowers = (flowers) => {
    return {
        type: FLOWERS.GET_FlOWERS,
        payload: {flowers}
    }
}

export const getFlowerId = (id) => {
    return {
        type: FLOWERS.GET_FLOWER_ID,
        payload: {id}
    }
}
