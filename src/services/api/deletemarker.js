import axios from "axios";
import Cookies from "js-cookie";
const BASE_URL = 'https://django.biscuitbobby.me/eventupdate/';
  
export const deletemarker = async (latitude,longitude,type,eventdetails,eventname) => {
    try {
        const apiService = axios.create({
            baseURL: BASE_URL,
            headers: {
                username: Cookies.get('username'),
                expiry: 0,
                lat:latitude,
                long:longitude,
                type:type,
                eventdetails:eventdetails,
                eventname:eventname,
                token:Cookies.get('token'),
                'Content-Type': 'application/json',
            },
        })
        const response = await apiService.post();

    } catch (error) {
        throw new Error('Event Update Failed');
    }
};