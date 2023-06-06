import Cookies from 'js-cookie';
import axios from 'axios';

const BASE_URL = 'https://django.biscuitbobby.me/register/';


  
export const register = async (username, password, email) => {
    try {
      const apiService = axios.create({
        baseURL: BASE_URL,
      });
  
      const data = {
        username: username,
        password: password,
        email: email,
      };
  
      const response = await apiService.post('', data);
  
    } catch (error) {
      throw new Error('Failed to Register');
    }
  };