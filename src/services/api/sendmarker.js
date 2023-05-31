import Cookies from 'js-cookie';
import axios from 'axios';

const BASE_URL = 'https://django.biscuitbobby.me/eventupdate/';


  
export const sendmarker = async (latitude,longitude,type,eventdetails,eventname) => {
try {
    const apiService = axios.create({
        baseURL: BASE_URL,
        headers: {
            username: Cookies.get('username'),
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
    throw new Error('Failed to fetch map data');
}
};