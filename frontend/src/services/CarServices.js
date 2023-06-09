import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

export default class CarServices {
    static async getCarList () {
        const response = await axios.get(`${baseURL}cars/`)
        return response
    }
    static async getCarDetail (id) {
        const response = await axios.get(`${baseURL}cars?id=${id}`)
        return response
    }
    static async getCarComment(id) {
        const response = await axios.get(`${baseURL}comments/${id}/`);
        return response;
    }
    static async getSearchCar(query) {
        const response = await axios.get(`${baseURL}search/?search=${query}`);
        return response;
    }
    static async getFilterCar(types, capacities, minPrice) {
        const queryParams = new URLSearchParams({
            price: minPrice,
            type: types.join(","),
            capacity: capacities.join(","),
        }).toString();
    
        const response = await axios.get(`${baseURL}filter/?${queryParams}`); // Update the URL
        return response;
    }
}




