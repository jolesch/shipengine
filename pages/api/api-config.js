import axios from 'axios';

export const apiConfig = {
    webAPI: 'https://api.shipengine.com/v1'
};

const api = axios.create({
    baseUrl: apiConfig.webAPI,
    headers: {
        'Content-Type': 'application/json'
    }
})

api.interceptors.request.use(
    config => {
        const apiKey = 'V5nfYGMs3XaYUj7k4uXeaY+ijKyV/POtHhF384H+Xa8';
        if(apiKey){
            config.headers['API-Key'] = apiKey;
        }
        config.params = {
            ...config.params
        }
        return config;
    },
    error => Promise.reject(error)
)

export default api;