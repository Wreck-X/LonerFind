import axios from 'axios';

const BASE_URL = 'https://django.biscuitbobby.me/loc/';

const apiService = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Radius':'100',
    'Content-Type': 'application/json',
  },
});

export const fetchMapData = async () => {
  try {
    const response = await apiService.get();
    return response;
  } catch (error) {
    console.log(error)
  }
};


