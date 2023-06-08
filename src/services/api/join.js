import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = 'https://django.biscuitbobby.me/join/';
  
export const joinevent = async (eventusername) => {
    try {
        const apiService = axios.create({
            baseURL: BASE_URL,
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const requestBody = {
            username: Cookies.get('username'),
            eventid: eventusername,
            token: Cookies.get('token'),
        };

        const response = await apiService.post('', requestBody);

        // Handle the response as needed
        console.log(response.data);

    } catch (error) {
        throw new Error('Join Failed');
    }
};