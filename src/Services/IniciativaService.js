import http from '../http-common.js';

const getIniciativas = () => {
    return http.get(`/iniciativa/findAll`);
};

const newIniciativa = (data) => {
    return http.post(`/iniciativa/newIniciativa`, data);
};

const deleteAll = () => {
    return http.delete(`/iniciativa/deleteAll/`);
};

const deleteOne = (id) => {
    return http.delete(`/iniciativa/deleteOne/${id}`);
};

const atualizaVez = (id, data) => {
    return http.put(`/iniciativa/updateVez/${id}`, data);
};

export default { getIniciativas, newIniciativa, deleteAll, deleteOne, atualizaVez};