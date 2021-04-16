import http from '../http-common-image.js';

const updatePlayerImagePath = (id, data) => {
    return http.put(`/imagePlayer/${id}`, data);
};

const updateNPCImagePath = (id, data) => {
    return http.put(`/imageNPC/${id}`, data);
};

export default { updatePlayerImagePath, updateNPCImagePath };