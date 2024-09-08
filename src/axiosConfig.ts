import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {
    
    baseURL: 'https://api.themoviedb.org/3/movie', 
    timeout: 10000, 
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json', 
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZTZjNDgzYzAyYWU3MDg0YjVmN2ZiOTc3ODlhMDA2NyIsIm5iZiI6MTcyNTgwMDU4MS42NTg3MzMsInN1YiI6IjY2ZGQ2ZjIyNTNjOWRmOTBlOTNhYjc2NSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.DnopfApwcJZ5xSarHpCVBj4lCpC0DbSyy04CMjktS1E'
    },

}


const axiosInstance = axios.create(config);

export default axiosInstance
