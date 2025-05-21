import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    
    baseURL: 'https://api.themoviedb.org/3/movie', 
    timeout: 10000, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json', 
      Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
    },

}

const axiosInstance = axios.create(config);

export default axiosInstance
