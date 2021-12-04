import React from 'react'
import CardAtributos from '../CardAtributos/CardAtributos';

function Atributos({id, Força, Destreza, Carisma, Inteligencia, Resistencia, Mira, Oficio, Percepcao, Radioatividade, Vida, Adicionar, setAdicionar, nome, imagePath}){
    return(
        <div>
            <CardAtributos Atributo="Vida" Banco="vida" Value={Vida} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Radioatividade" Banco="radioatividade" Value={Radioatividade} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Iniciativa" Banco="" Value={Destreza} id={id} Adicionar={Adicionar}
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Força" Banco="força" Value={Força} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Destreza" Banco="destreza" Value={Destreza} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Carisma" Banco="carisma" Value={Carisma} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Inteligência" Banco="inteligencia" Value={Inteligencia} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Resistência" Banco="resistencia" Value={Resistencia} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Mira" Banco="mira" Value={Mira} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Ofício" Banco="oficio" Value={Oficio} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
            <CardAtributos Atributo="Percepção" Banco="percepcao" Value={Percepcao} id={id} Adicionar={Adicionar} 
                setAdicionar={setAdicionar} nome={nome} imagePath={imagePath}></CardAtributos>
        </div>
    );
}

export default Atributos;