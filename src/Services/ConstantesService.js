import http from '../http-common.js';

const getConstante = (name) => {
    return http.get(`/constantes?name=${name}`);
};

export default { getConstante };