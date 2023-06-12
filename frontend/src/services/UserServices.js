import axiosInstance from "./api";
const baseURL = 'http://127.0.0.1:8000/api/';

let _csrfToken = null;
export default class UserServices {

    static async getCsrfToken() {
      if (_csrfToken === null) {
        const response = await axiosInstance.get(`${baseURL}user/csrf/`, { withCredentials: true });
        _csrfToken = response.data.csrfToken;
      }
      return _csrfToken;
    }

    static async register ( {email, user_name, password} ) {
        const {data} = await axiosInstance.post(`${baseURL}user/register/`,{
            email,
			      user_name,
            password,
            
        })
        return data
    }
    static async login({email, password}) {
        const response = await axiosInstance.post(`${baseURL}token/`, {
          email,
          password,
        });
      
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        axiosInstance.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('access_token');
      
        return response;
      }
      static async getUserId() {
          const response = await axiosInstance.get(`${baseURL}user/user-id/`);
          return response.data;
      }
    
}










