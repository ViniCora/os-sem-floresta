import React from 'react'
import CardAtributos from '../CardAtributos/CardAtributos';

function Atributos({id, Força, Destreza, Carisma, Inteligencia, Resistencia, Mira, Oficio, Percepcao, Vida}){
    return(
        <div>
            <CardAtributos Atributo="Vida" Banco="vida" Value={Vida} id={id}></CardAtributos>
            <CardAtributos Atributo="Iniciativa" Banco="" Value={Destreza} id={id}></CardAtributos>
            <CardAtributos Atributo="Força" Banco="força" Value={Força} id={id}></CardAtributos>
            <CardAtributos Atributo="Destreza" Banco="destreza" Value={Destreza} id={id}></CardAtributos>
            <CardAtributos Atributo="Carisma" Banco="carisma" Value={Carisma} id={id}></CardAtributos>
            <CardAtributos Atributo="Inteligência" Banco="inteligencia" Value={Inteligencia} id={id}></CardAtributos>
            <CardAtributos Atributo="Resistência" Banco="resistencia" Value={Resistencia} id={id}></CardAtributos>
            <CardAtributos Atributo="Mira" Banco="mira" Value={Mira} id={id}></CardAtributos>
            <CardAtributos Atributo="Ofício" Banco="oficio" Value={Oficio} id={id}></CardAtributos>
            <CardAtributos Atributo="Percepção" Banco="percepcao" Value={Percepcao} id={id}></CardAtributos>
        </div>
    );
}

export default Atributos;