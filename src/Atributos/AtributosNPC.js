import React from 'react'
import CardAtributosNPC from '../CardAtributos/CardAtributosNPC';

function AtributosNPC({id, Força, Destreza, Carisma, Inteligencia, Resistencia, Mira, Oficio, Percepcao, Vida, nome, imagePath}){
    return(
        <div>
            <CardAtributosNPC Atributo="Vida" Banco="vida" Value={Vida} id={id} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Iniciativa" Banco="" Value={Destreza} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Força" Banco="força" Value={Força} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Destreza" Banco="destreza" Value={Destreza} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Carisma" Banco="carisma" Value={Carisma} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Inteligência" Banco="inteligencia" Value={Inteligencia} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Resistência" Banco="resistencia" Value={Resistencia} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Mira" Banco="mira" Value={Mira} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Ofício" Banco="oficio" Value={Oficio} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
            <CardAtributosNPC Atributo="Percepção" Banco="percepcao" Value={Percepcao} id={id} nome={nome} imagePath={imagePath}></CardAtributosNPC>
        </div>
    );
}

export default AtributosNPC;