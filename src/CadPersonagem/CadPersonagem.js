import React, { useState } from 'react';
import Header from '../Header/Header.js';
import DivNomeEBaseCad from './DivNomeEBaseCad.js';
import DivAtributosCad from './DivAtributosCad.js';
import "./style.css";
import AtributesDataService from '../Services/AtributesService.js';

function CadPersonagem(){
    const [nome, setNome] = useState('');
    const [jogador, setJogador] = useState('');
    const [nascimento, setNascimento] = useState('');
    const [oficioBase, setOficioBase] = useState('');
    const [oficioPreBase, setOficioPreBase] = useState('');
    const [força, setForça] = useState(0);
    const [destreza, setDestreza] = useState(0);
    const [carisma, setCarisma] = useState(0);
    const [inteligencia, setInteligencia] = useState(0);
    const [resistencia, setResistencia] = useState(0);
    const [mira, setMira] = useState(0);
    const [oficio, setOficio] = useState(0);
    const [percepcao, setPercepcao] = useState(0);
    const [mostrarTelaInicial, setMostrarTelaInicial] = useState(false);
    const [file, setFile] = useState(null);

    return(
        <div>
        <Header></Header>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',
        width:'800px', height: '30%', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', paddingTop: '10px'}}>
            <DivNomeEBaseCad Atributo="Nome" Value={nome} setValue={setNome}></DivNomeEBaseCad>
            <DivNomeEBaseCad Atributo="Jogador" Value={jogador} setValue={setJogador}></DivNomeEBaseCad>
            <DivNomeEBaseCad Atributo="Nascimento" Value={nascimento} setValue={setNascimento}></DivNomeEBaseCad>
            <DivNomeEBaseCad Atributo="Ofício Base" Value={oficioBase} setValue={setOficioBase}></DivNomeEBaseCad>
            <DivNomeEBaseCad Atributo="Ofício Pré Base" Value={oficioPreBase} setValue={setOficioPreBase}></DivNomeEBaseCad>
            <DivAtributosCad Atributo="Força" Value={força} setValue={setForça}></DivAtributosCad>
            <DivAtributosCad Atributo="Destreza" Value={destreza} setValue={setDestreza}></DivAtributosCad>
            <DivAtributosCad Atributo="Carisma" Value={carisma} setValue={setCarisma}></DivAtributosCad>
            <DivAtributosCad Atributo="Inteligência" Value={inteligencia} setValue={setInteligencia}></DivAtributosCad>
            <DivAtributosCad Atributo="Resistência" Value={resistencia} setValue={setResistencia}></DivAtributosCad>
            <DivAtributosCad Atributo="Mira" Value={mira} setValue={setMira}></DivAtributosCad>
            <DivAtributosCad Atributo="Ofício" Value={oficio} setValue={setOficio}></DivAtributosCad>
            <DivAtributosCad Atributo="Percepção" Value={percepcao} setValue={setPercepcao}></DivAtributosCad>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'20px'}}>
              <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Mostrar na tela inicial?</label>
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px', paddingTop: '20px'}}>
                <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Não</label>
                  <label class="switch"> 
                    <input type="checkbox" onClick={()=>{
                        if(mostrarTelaInicial){
                          setMostrarTelaInicial(false)
                        }else{
                          setMostrarTelaInicial(true);
                        }
                    }} />
                    <span class="slider round"></span>
                  </label>
                <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff'}}>Sim</label>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingBottom:'20px'}}>
              <label style={{fontSize: '25px', color: '#fff'}}>Escolha um arquivo com o nome do personagem e sem espaçamento:</label>
              <label style={{fontSize: '15px', color: '#fff'}}>Ex: "LuisGarciaDoNascimento.jpg":</label>
              <div style={{display: 'flex', flexDirection: 'row', maxWidth: '125px', paddingLeft: '10px',paddingBottom: '10px', paddingTop: '20px'}}>
                <input type="file" onChange={(e)=>{
                  console.log(e.target.files[0]);
                  setFile(e.target.files[0]);
                }}></input>
              </div>
            </div>

            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom:'20px'}}>
                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                  borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                          if(nome !== '' && jogador !== '' && força !== 0 && destreza !== 0 && carisma !== 0 && inteligencia !== 0 
                            && resistencia !== 0 && mira !== 0 && percepcao !== 0){
                              const data = {
                                name: nome,
                                força : força,
                                destreza: destreza,
                                carisma: carisma,
                                inteligencia: inteligencia,
                                resistencia: resistencia,
                                mira: mira,
                                oficio: oficio,
                                percepcao: percepcao,
                                nascimento: nascimento,
                                oficio_base: oficioBase,
                                oficio_pre_base: oficioPreBase,
                                jogador: jogador,
                                vida: 100,
                                mostrar_tela: mostrarTelaInicial
                              }

                              let formData = new FormData();

                              formData.append('playerImage', file);
                              formData.append('name', nome);
                              formData.append('jogador', jogador);
                              formData.append('nascimento', nascimento);
                              formData.append('oficio_pre_base', oficioPreBase);
                              formData.append('oficio_base', oficioBase);
                              formData.append('vida', 100);
                              formData.append('força', força);
                              formData.append('destreza', destreza);
                              formData.append('carisma', carisma);
                              formData.append('inteligencia', inteligencia);
                              formData.append('resistencia', resistencia);
                              formData.append('mira', mira);
                              formData.append('oficio', oficio);
                              formData.append('percepcao', percepcao);
                              formData.append('mostrar_tela', mostrarTelaInicial);

                              AtributesDataService.createPlayer(formData)
                              .then((response) => {
                                alert("Personagem cadastrado com sucesso");
                                setNome('');
                                setJogador('');
                                setNascimento('');
                                setOficioBase('');
                                setOficioPreBase('');
                                setForça(0);
                                setDestreza(0);
                                setCarisma(0);
                                setInteligencia(0);
                                setResistencia(0);
                                setMira(0);
                                setOficio(0);
                                setPercepcao(0);
                              })
                              .catch((e) => {
                              console.log(e);
                              });
                            }else{
                              alert("Preencha todos os campos");
                            }
                  }}>Cadastrar
                      
                  </button>
            </div>                   
          </div>
        </div>
      </div>
    );
}

export default CadPersonagem;