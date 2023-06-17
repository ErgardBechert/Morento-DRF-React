import axiosInstance from "./api";

const baseURL = 'http://127.0.0.1:8000/api/';

export default class CarServices {
  static async getCsrfToken(setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}user/csrf/`, { withCredentials: true });
      return response.data.csrfToken;
    } catch (error) {
      const errorMessage = 'Failed to get CSRF token: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  /* Car Display */

  static async getCarList(setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}cars/`);
      return response;
    } catch (error) {
      const errorMessage = 'Failed to get car list: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getCarDetail(id, setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}cars?id=${id}`);
      return response;
    } catch (error) {
      const errorMessage = 'Failed to get car detail: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getSearchCar(query, setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}search/?search=${query}`);
      return response;
    } catch (error) {
      const errorMessage = 'Failed to search car: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getFilterCar(types, capacities, minPrice, setErrorMessage) {
    try {
      const queryParams = new URLSearchParams({
        price: minPrice,
        type: types.join(","),
        capacity: capacities.join(","),
      }).toString();

      const response = await axiosInstance.get(`${baseURL}filter/?${queryParams}`);
      return response;
    } catch (error) {
      const errorMessage = 'Failed to filter car: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getCarComment(id, setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}comments/${id}/`);
      return response;
    } catch (error) {
      const errorMessage = 'Failed to get car comment: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }
}