import { FLOWERS } from "../constants/Flowers";
import * as Api from "./../api/Flower";

export const getFlowers = () => (dispatch) => {
    Api.getFlowers().then(flowers => {
        dispatch({
            type: FLOWERS.SET_FlOWERS,
            payload: {flowers}
        })
    })
}

export const getFlowerById = (id, history) => (dispatch) => {
    Api.getFlowerById(id).then(flower => {
        dispatch({
            type: FLOWERS.SET_FLOWER,
            payload: {flower}
        })
   }).catch(() => {
        history.push("/not-found")
   })
}
