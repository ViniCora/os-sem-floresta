import React, { useState, useEffect } from 'react';
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
    const [points, setPoints] = useState(0);

    useEffect(() => {
      retrievePoints();
    }, []);
  
  
    const retrievePoints = () => {
      AtributesDataService.getAtributes("valorPontos")
      .then((response) => {
      setPoints(response.data[0].value);
      })
      .catch((e) => {
      console.log(e);
      });
  };

  function pontosUsados(){
    var pontosT = 0;
    if(força != ''){
      pontosT+=parseInt(força) ;
    }
    if(destreza != ''){
      pontosT+=parseInt(destreza) ;
    }
    if(carisma != ''){
      pontosT+=parseInt(carisma) ;
    }
    if(inteligencia != ''){
      pontosT+=parseInt(inteligencia) ;
    }
    if(resistencia != ''){
      pontosT+=parseInt(resistencia) ;
    }
    if(mira != ''){
      pontosT+=parseInt(mira) ;
    }
    if(oficio != ''){
      pontosT+=parseInt(oficio) ;
    } 
    if(percepcao != ''){
      pontosT+=parseInt(percepcao) ;
    }

      return pontosT;
  }

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
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', paddingTop: '20px', paddingBottom: '50px'}}>
              {pontosUsados() > 470 ? '' : 
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <label style={{fontSize: '30px', color: '#fff'}}>{`Total de pontos disponíveis para distribuir: `}</label>
                <label style={{fontSize: '30px', color: '#fff ', paddingLeft:'10px'}}>{parseInt(points) - pontosUsados()}</label>
              </div>
              }
              <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                <label style={{fontSize: '30px', color: '#fff'}}>{`Pontos usados: `}</label>
                {pontosUsados() < 470 ? 
                  <label style={{fontSize: '30px', color: '#ffa500', paddingLeft:'10px'}}>{pontosUsados()}</label>
                :
                pontosUsados() === 470 ? 
                  <label style={{fontSize: '30px', color: '#0B9205', paddingLeft:'10px'}}>{pontosUsados()}</label>
                :
                  <label style={{fontSize: '30px', color: '#ff0000', paddingLeft:'10px'}}>{pontosUsados()}</label>
                }
              </div>
              {pontosUsados() <= 470 ? '' : 
                <label style={{fontSize: '30px', color: '#ff0000'}}>{`Você passou do número de pontos disponíveis!`}</label>
              }
              {pontosUsados() >= 470 ? '' : 
                <label style={{fontSize: '30px', color: '#ff0000'}}>{`Feche 470 pontos antes de cadastrar!`}</label>
              }
            </div>
            <DivAtributosCad Atributo="Força" Value={força} setValue={setForça} points={points} setPoints={setPoints}setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Destreza" Value={destreza} setValue={setDestreza} setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Carisma" Value={carisma} setValue={setCarisma} setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Inteligência" Value={inteligencia} setValue={setInteligencia} setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Resistência" Value={resistencia} setValue={setResistencia} setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Mira" Value={mira} setValue={setMira} setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Ofício" Value={oficio} setValue={setOficio} setPoints={setPoints}></DivAtributosCad>
            <DivAtributosCad Atributo="Percepção" Value={percepcao} setValue={setPercepcao} setPoints={setPoints}></DivAtributosCad>

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
              <label style={{fontSize: '25px', color: '#fff'}}>Escolha a imagem do personagem:</label>
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
                          if(pontosUsados() > 470){
                            alert(`Você não pode fazer um cadastro com mais de ${points} pontos!`);
                          }else 
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
                                alert("Personagem cadastrado com sucesso, link da pagina do personagem: https://os-sem-floresta.herokuapp.com/" + nome.replace(/\s/g, ''));
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