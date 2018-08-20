import { FLOWERS } from "../constants/Flowers";
import {data} from "./../data/index";

let initialState = {
    flowers: [],
    id: []
}

const getFlowers = () => {
    return new Promise((resolve) => {
        resolve(data);
    });
}

const getFlowerById = (id) => {
    return new Promise((resolve, reject) => {
        let flower = data.find(fl => fl.id.toString() === id);
        if(flower) return resolve(flower);
        reject("Flover not found");
    });
}





const flowersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FLOWERS.GET_FlOWERS:
            return getFlowers(state, action.payload);
        case FLOWERS.GET_FLOWER_ID:
            return getFlowerById(state, action.payload);
        default: return (state);
        
    }
}
export default flowersReducer;
