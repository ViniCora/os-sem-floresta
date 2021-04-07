import http from '../http-common.js';

const getAtributes = (name) => {
    return http.get(`/atributes?name=${name}`);
};

const getPlayers = () => {
    return http.get(`/players`);
};

const getPlayerImage = (fileName) => {
    return http.get(`/uploads/${fileName}`);
};

const createPlayer = (data) => {
    return http.post(`/players`, data);
}

const updateVida = (id, data) => {
    return http.put(`/atributes/vida/${id}`, data);
}

const updateMostrarTela = (id, data) => {
    return http.put(`/atributes/mostrarTela/${id}`, data);
}

const updateForca = (id, data) => {
    return http.put(`/atributes/forca/${id}`, data);
}

const updateDestreza = (id, data) => {
    return http.put(`/atributes/destreza/${id}`, data);
}

const updateCarisma = (id, data) => {
    return http.put(`/atributes/carisma/${id}`, data);
}

const updateInteligencia = (id, data) => {
    return http.put(`/atributes/inteligencia/${id}`, data);
}

const updateResistencia = (id, data) => {
    return http.put(`/atributes/resistencia/${id}`, data);
}

const updateMira = (id, data) => {
    return http.put(`/atributes/mira/${id}`, data);
}

const updateOficio = (id, data) => {
    return http.put(`/atributes/oficio/${id}`, data);
}

const updatePercepcao = (id, data) => {
    return http.put(`/atributes/percepcao/${id}`, data);
}

export default { getAtributes, getPlayers, getPlayerImage, createPlayer, updateVida, updateMostrarTela, updateForca, updateDestreza, updateCarisma, updateInteligencia, updateResistencia, updateMira, updateOficio, updatePercepcao};