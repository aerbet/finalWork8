import axios from 'axios';

const axiosApi = axios.create({
  baseURL: 'https://hw63-fa4ea-default-rtdb.europe-west1.firebasedatabase.app/'
});

export default axiosApi;