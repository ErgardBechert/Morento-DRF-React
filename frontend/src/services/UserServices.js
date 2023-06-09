import axios from "axios";

const baseURL = 'http://127.0.0.1:8000/api/';

export default class UserServices {
    static async register ( {email, user_name, password} ) {
        const {data} = await axios.post(`${baseURL}user/register/`,{
            email,
			user_name,
            password,
            
        })
        return data
    }
    static async login({email, password}) {
        const response = await axios.post(`${baseURL}token/`, {
          email,
          password,
        });
      
        localStorage.setItem('access_token', response.data.access);
        localStorage.setItem('refresh_token', response.data.refresh);
        axios.defaults.headers.common['Authorization'] =
          'JWT ' + localStorage.getItem('access_token');
      
        return response;
      }
    
    
}










