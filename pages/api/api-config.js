import axios from 'axios';

export const apiConfig = {
    webAPI: 'https://api.shipengine.com/v1'
};

const api = axios.create({
    baseURL: apiConfig.webAPI,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
})

api.interceptors.request.use(
    config => {
        const apiKey = 'test_key';
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
