import axiosInstance from "./api";

const baseURL = 'http://127.0.0.1:8000/api/';
let _csrfToken = null;

export default class CarServices {

    static async getCsrfToken() {
        if (_csrfToken === null) {
          const response = await axiosInstance.get(`${baseURL}user/csrf/`, { withCredentials: true });
          _csrfToken = response.data.csrfToken;
        }
        return _csrfToken;
      }
      

    /* Car Display */

    static async getCarList () {
        const response = await axiosInstance.get(`${baseURL}cars/`)
        return response
    }
    static async getCarDetail (id) {
        const response = await axiosInstance.get(`${baseURL}cars?id=${id}`)
        return response
    }
    static async getSearchCar(query) {
        const response = await axiosInstance.get(`${baseURL}search/?search=${query}`);
        return response;
    }
    static async getFilterCar(types, capacities, minPrice) {
        const queryParams = new URLSearchParams({
            price: minPrice,
            type: types.join(","),
            capacity: capacities.join(","),
        }).toString();
    
        const response = await axiosInstance.get(`${baseURL}filter/?${queryParams}`); // Update the URL
        return response;
    }

    /* Comment */
    static async getCarComment(id) {
        const response = await axiosInstance.get(`${baseURL}comments/${id}/`);
        return response;
    }

    static async postCreateCarComment( { car_id, text, grade } ) {
        const response = await axiosInstance.post(`${baseURL}comment/create/`,{
            car_id,
            text,
            grade,
        } 
        );
        return response;
        
    }

    static async patchEditCarComment( { id, text, grade } ) {
        const response = await axiosInstance.patch(`${baseURL}comment/edit/${id}/`,{
            text,
            grade,
        } 
        );
        return response;
        
    }

    static async deleteCarComment(id) {
        const response = await axiosInstance.delete(`${baseURL}comment/delete/${id}/`);
        return response;
        
    }
}




