import http from '../http-common.js';

const getRolls = () => {
    return http.get(`/roll/findAll`);
};

const newRoll = (data) => {
    return http.post(`/roll/newRoll`, data);
};

const deleteAll = () => {
    return http.delete(`/roll/deleteAll/`);
};

const deleteOne = (id) => {
    return http.delete(`/roll/deleteOne/${id}`);
};

export default { getRolls, newRoll, deleteAll, deleteOne};