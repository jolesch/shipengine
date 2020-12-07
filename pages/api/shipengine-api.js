import api from './api-config';

export const getCarriers = async () => {
    await api.get('/carriers').then((res) => {
        return res.data;
        })
        .catch((e) => {
            console.error(e)
        });
}
