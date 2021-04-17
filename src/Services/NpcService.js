import http from '../http-common.js';

const getAtributes = (name) => {
    return http.get(`/atributeNpc?name=${name}`);
};

const getNPC = () => {
    return http.get(`/npc`);
};

const getNPCImage = (fileName) => {
    return http.get(`/uploads/${fileName}`);
};

const createNPC = (data) => {
    return http.post(`/npc`, data);
}

const updateVida = (id, data) => {
    return http.put(`/npc/vida/${id}`, data);
}

const updateMostrarTela = (id, data) => {
    return http.put(`/npc/mostrarTela/${id}`, data);
}

const updateForca = (id, data) => {
    return http.put(`/npc/forca/${id}`, data);
}

const updateDestreza = (id, data) => {
    return http.put(`/npc/destreza/${id}`, data);
}

const updateCarisma = (id, data) => {
    return http.put(`/npc/carisma/${id}`, data);
}

const updateInteligencia = (id, data) => {
    return http.put(`/npc/inteligencia/${id}`, data);
}

const updateResistencia = (id, data) => {
    return http.put(`/npc/resistencia/${id}`, data);
}

const updateMira = (id, data) => {
    return http.put(`/npc/mira/${id}`, data);
}

const updateOficio = (id, data) => {
    return http.put(`/npc/oficio/${id}`, data);
}

const updatePercepcao = (id, data) => {
    return http.put(`/npc/percepcao/${id}`, data);
}

export default { getAtributes, getNPC, getNPCImage, createNPC, updateVida, updateMostrarTela, updateForca,
     updateDestreza, updateCarisma, updateInteligencia, updateResistencia, updateMira, updateOficio, updatePercepcao};