import api from './api-config';

export const getCarriers = () => {
    return api.get('/carriers').then((res) => {
        if(res.data !== null) {
            return res.data;
        }
    });
}
