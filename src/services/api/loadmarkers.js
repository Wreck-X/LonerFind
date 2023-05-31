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
    let mapData;
    const response = await apiService.get();
    console.log(response.data)
    mapData = JSON.parse(response.data)
    return mapData;
  } catch (error) {
    throw new Error('Failed to fetch map data');
  }
};


