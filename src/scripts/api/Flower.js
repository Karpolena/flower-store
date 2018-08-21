import {data} from "./../data/index";

export const getFlowers = () => {
     return new Promise((resolve) => {
         resolve(data);
     });
 }

export const getFlowerById = (id) => {
    return new Promise((resolve, reject) => {
         let flower = data.find(fl => fl.id.toString() === id);
         if(flower) return resolve(flower);
         reject("Flover not found");
     });
}
