import axios from 'axios';

const API_BASE_URL = 'https://elchocrud.pro/api/v1/mypizza';
export const perforeRequests = async (method, endpoint, data = null) => {
  const url = `${API_BASE_URL}/${endpoint}`;
  try {
    let response;
    switch (method.toLowerCase()) {
      case 'get':
        response = await axios.get(url);
        break;
      case 'post':
        response = await axios.post(url, data);
        break;
      case 'put':
        response = await axios.put(url, data);
        break;
      case 'delete':
        response = await axios.delete(url);
        break;
      default:
        throw new Error(`Unsupported HTTP method : ${method}`);
    }
    return response.data;
  } catch (error) {
    console.error(`Error performing ${method} request to ${endpoint}`);
    throw error;
  }
};
