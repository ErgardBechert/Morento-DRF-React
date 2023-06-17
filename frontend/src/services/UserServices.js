import axiosInstance from "./api";

const baseURL = 'http://127.0.0.1:8000/api/';

export default class UserServices {
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

  static async register({ email, user_name, password }, setErrorMessage, setSuccessMessage) {
    try {
      const response = await axiosInstance.post(`${baseURL}user/register/`, {
        email,
        user_name,
        password,
      });

      if (response.data) {
        setSuccessMessage('Успешная регистрация');
        return response.data;
      } else {
        throw new Error('Empty response');
      }
    } catch (error) {
      const errorMessage = 'Registration failed: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async login({ email, password }, setErrorMessage, setSuccessMessage) {
    try {
      const response = await axiosInstance.post(`${baseURL}token/`, {
        email,
        password,
      });

      localStorage.setItem('access_token', response.data.access);
      localStorage.setItem('refresh_token', response.data.refresh);
      axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');

      setSuccessMessage('Успешный вход');
      return response;
    } catch (error) {
      const errorMessage = 'Login failed: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async logout(setErrorMessage) {
    try {
      const response = await axiosInstance.post(`${baseURL}user/logout/blacklist/`, {
        refresh_token: localStorage.getItem('refresh_token'),
      });

      localStorage.removeItem('access_token');
      localStorage.removeItem('refresh_token');
      axiosInstance.defaults.headers['Authorization'] = null;

      return response;
    } catch (error) {
      const errorMessage = 'Logout failed: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getUserId(setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}user/user-id/`);
      return response.data;
    } catch (error) {
      const errorMessage = 'Failed to get user ID: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getUserData(setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}user/user-data/`);
      return response.data;
    } catch (error) {
      const errorMessage = 'Failed to get user data: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }

  static async getUserAvatar(avatar, setErrorMessage) {
    try {
      const response = await axiosInstance.get(`${baseURL}user${avatar}`);
      return response.data;
    } catch (error) {
      const errorMessage = 'Failed to get user avatar: ' + error.message;
      if (setErrorMessage) {
        setErrorMessage(errorMessage);
      }
      throw new Error(errorMessage);
    }
  }
}