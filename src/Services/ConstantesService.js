import http from '../http-common.js';

const getConstante = (name) => {
    return http.get(`/constantes?name=${name}`);
};

const updateConstante = (name, data) => {
    return http.put(`/constantes?name=${name}`, data);
};

export default { getConstante, updateConstante};