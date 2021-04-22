import {React, useState} from 'react';
import dados from '../Icons/Dados.png'
import forçaImg from '../Icons/Arm.png'
import destrezaImg from '../Icons/Run.png'
import carismaImg from '../Icons/Happy.png'
import inteligenciaImg from '../Icons/Brain.png'
import resistenciaImg from '../Icons/Strong.png'
import miraImg from '../Icons/Gun.png'
import oficioImg from '../Icons/Wrench.png'
import vidaImg from '../Icons/heart.png'
import editarImg from '../Icons/pencil.png'
import confirmar from '../Icons/right.png'
import cancenlar from '../Icons/wrong.png'
import iniciativaImg from '../Icons/podium.png'
import percepcaoImg from '../Icons/Binoculars.png'
import plus from '../Icons/plus.png'
import minus from '../Icons/minus.png'
import Modal from 'react-modal';
import NPCDataService from '../Services/NpcService.js';
import IniciativaDataService from '../Services/IniciativaService.js';
import RollsDataService from '../Services/RollsService.js';
import './CardAtributos.css'

function CardAtributosNPC({Atributo, Banco, Value, id, nome, imagePath}){
    const customStyles = {
        content : {
          top                   : '25%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '50%',
          backgroundColor       : '#696969',
          borderColor           : '#000', 
          borderRadius          : '8px', 
          borderStyle           : 'solid', 
          borderWidth           : '2px',
        }
      };

    const [valor, setValor] = useState(Value);
    const [modalIsOpen,setIsOpen] = useState(false);
    const [hasRoll,setHasRoll] = useState(false);
    const [modifier,setModifier] = useState(0);
    const [roll, setRoll] = useState(0);
    const [rollSemMod, setRollSemMod] = useState(0);
    const [contestacao, setContestacao] = useState(0);
    const valorMinimo = 100 - valor;
    const [isEditar, setIsEditar] = useState(false);
    const [valorPreEdicao, setValorPreEdicao] = useState(valor);
    const [valorGarantido, setValorGarantido] = useState(0);
    const [iniciativa, setIniciativa] = useState(0);

    function addIniciativa(ini){

        IniciativaDataService.newIniciativa({name: nome, imagePath: imagePath, value: ini})
                .then((response) => {
                    console.log("Iniciativa adicionada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
    }

    function salvarRoll(contestacao, valorRodado, varGarantido){
        var sucesso = false;
        if(valorRodado <= 100 && valorRodado >= valorMinimo && varGarantido < 100){
            sucesso = true;
        }

        var data = {
            name: nome,
            imagePath: imagePath,
            atributo: Atributo,
            valorRodado: valorRodado,
            valorContestação: contestacao,
            sucesso: sucesso
        }

        RollsDataService.newRoll()

    }

    function alterarValorBanco(newValue){
        switch (Banco) {
              case 'vida': 
                NPCDataService.updateVida(id, {value: valor})
                .then((response) => {
                    console.log("Vida alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'força':
                NPCDataService.updateForca(id, {value: newValue})
                .then((response) => {
                    console.log("Força alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'destreza':
                NPCDataService.updateDestreza(id, {value: newValue})
                .then((response) => {
                    console.log("Destreza alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'carisma':
                NPCDataService.updateCarisma(id, {value: newValue})
                .then((response) => {
                    console.log("Carisma alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'inteligencia':
                NPCDataService.updateInteligencia(id, {value: newValue})
                .then((response) => {
                    console.log("Inteligencia alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'resistencia':
                NPCDataService.updateResistencia(id, {value: newValue})
                .then((response) => {
                    console.log("Resistencia alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'mira':
                NPCDataService.updateMira(id, {value: newValue})
                .then((response) => {
                    console.log("Mira alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'oficio':
                NPCDataService.updateOficio(id, {value: newValue})
                .then((response) => {
                    console.log("Oficio alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
              case 'percepcao':
                NPCDataService.updatePercepcao(id, {value: newValue})
                .then((response) => {
                    console.log("Percepção alterada com sucesso");
                })
                .catch((e) => {
                console.log(e);
                });
              break;
            default:
              console.log(`Sorry, we are out of ${Banco}.`);
          }
    }
 
    return(
        
        <div style={{width:'750px', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', 
        marginBottom: '50px', padding: '10px', maxHeight: '50px', backgroundColor:'#696969', display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={()=>{setIsOpen(false); setHasRoll(false); setModifier(0);}}
              style={customStyles}
              contentLabel="Example Modal"
            >
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                    <h2 style={{fontSize:'30px'}}>Teste de {Atributo}</h2>
                </div>
                {hasRoll ? 
                            <div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', marginTop: '50px'}}>
                                <div style={{width: '75%', height: '200px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                    flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between'}}>
                                        { Atributo === 'Iniciativa' ?  
                                                <h2 style={{ fontSize: '20px', marginBottom: '20px'}}> Valor de iniciativa: {iniciativa}.</h2>
                                            : 
                                            
                                                ''
                                        }
                                        <h2 style={{ fontSize: '20px', marginTop: '20px'}}>{ Atributo === 'Iniciativa' ? '' :
                                            rollSemMod === 1 ? 'Falha Crítica, rodou: ' + roll :  
                                            rollSemMod === 100 ? 'Sucesso Crítico, rodou: ' + roll :
                                            (valorGarantido <= 0) ? 'Ação Impossivel!' :
                                            (roll >= 1 && roll < valorMinimo) ? 'Falhou, rodou: ' + roll + (modifier !== 0 ? ` (${rollSemMod} com modifier de: ${modifier})` : '') +  '.' :
                                            (roll <= 100 && roll >= valorMinimo && valorGarantido < 100) ? 'Sucesso, rodou: ' + roll + (modifier !== 0 ? ` (${rollSemMod} com modifier de: ${modifier})` : '') +'.' : 
                                            (modifier > 0 && valorGarantido >= 100) ? 'Ação garantida!' : ''
                                        }</h2>
                                            <h2 style={{ fontSize: '20px', marginBottom: '20px'}}>{`Valor minimo para sucesso era: ${valorMinimo}.`}</h2>
                                        {roll > valorMinimo ?
                                            <h2 style={{ fontSize: '20px', marginBottom: '20px'}}> Valor de contestação: {contestacao}.</h2>
                                        :
                                            ''
                                        }
                                </div>
                            </div>
                                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                                    {Atributo === 'Iniciativa' ? 
                                        <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                            window.open('https://os-sem-floresta.herokuapp.com/iniciativa');
                                            setIsOpen(false); setHasRoll(false); setModifier(0);
                                        }
                                        }>Ir para iniciativa</button>
                                    :
                                        ''
                                    }

                                    <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                        borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                            setIsOpen(false); setHasRoll(false); setModifier(0);
                                        }
                                        }>Fechar</button>

                                </div>
                            </div> 
                        :
                        <div>
                            <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px'}}>
                                <div style={{width: '50%', height: '200px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', display: 'flex', 
                                    flexDirection: 'column', alignItems: 'center',justifyContent: 'space-between'}}>
                                        <h2 style={{ fontSize: '20px', marginTop: '10px'}}>Qual o modifier a ser adicionado?</h2>
                                        <input value={modifier} maxLength='3'
                                        style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                                        borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} type='number' onChange={(event)=>{
                                        
                                            var value = event.target.value;
                                            
                                            if(value <= 100 && value >= -100){
                                                setModifier(value);
                                            }
                                        }}></input>
                                </div>
                            </div>
                            <div style={{display:'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: '50px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                    borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                                            var mod = modifier;
                                            if(modifier == ''){
                                                setModifier(0);
                                                mod = 0;
                                            }
                                            setHasRoll(true);
                                            var newRoll = (Math.floor(Math.random() * 100) + 1);
                                            setRollSemMod(newRoll);
                                            newRoll += parseInt(mod);
                                            if(newRoll > 100){
                                                newRoll = 100;
                                            }
                                            if(newRoll <= 0){
                                                newRoll = 1;
                                            }
                                            setRoll(newRoll);
                                            var cont = Math.ceil((valor * newRoll)/100);
                                            console.log(cont);
                                            setContestacao(cont);
                                            setValorGarantido(valor + parseInt(mod));
                                            var valorGar = valor + parseInt(mod);
                                            setValorGarantido(valorGar);
                                            setHasRoll(true);
                                            salvarRoll(cont, newRoll, valorGar);
                                        }
                                    }>Rodar</button>
                            </div>
                        </div>
                }
            </Modal>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'start'}}>
                <div>
                    <img style ={{maxWidth: '40px', paddingRight: '10px'}} 
                    src={Atributo === 'Força' ? forçaImg : 
                         Atributo === 'Destreza' ?  destrezaImg :
                         Atributo === 'Carisma' ? carismaImg :
                         Atributo === 'Inteligência' ? inteligenciaImg :
                         Atributo === 'Resistência' ? resistenciaImg : 
                         Atributo === 'Mira' ? miraImg : 
                         Atributo === 'Ofício' ? oficioImg : 
                         Atributo === 'Percepção' ? percepcaoImg : 
                         Atributo === 'Vida' ? vidaImg : iniciativaImg} alt="Força" />
                </div>
                {
                    isEditar ? 
                        <div>
                            <label style={{fontSize: '30px', paddingLeft:'10px'}}>{Atributo}: </label>
                                <input value={valor} maxLength='3'
                                style={{backgroundColor: '#696969', fontSize: '30px', maxWidth: '70px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                                borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} 
                                type='number' onChange={(event)=>{
                                    var value = event.target.value;

                                    if(value <= 100 && value >= -100){
                                        setValor(value);
                                    }

                                }}></input>
                            
                        </div>
                    : 
                        <label style={{fontSize: '30px', paddingLeft:'10px'}}>{Atributo === 'Iniciativa' ? `Iniciativa` : `${Atributo}:`} { 
                        Atributo === 'Iniciativa' ? '' : valor}</label>
                }
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                {(isEditar) ? '' : 
                
                    (Atributo === 'Vida') ? '' : 
                
                    <div style={{paddingRight: '10px'}}>
                        <input type='image' src={ (dados)} alt='row' width="40px" height="40px" onClick={()=>{
                 
                                setIsEditar(false);
                                if(Atributo === 'Iniciativa'){
                                    setHasRoll(true);
                                    var newRoll = (Math.floor(Math.random() * 100) + 1);
                                    var ini = Math.ceil((newRoll * valor) /100);
                                    setIniciativa(ini);
                                    addIniciativa(ini);
                                }
                                setIsOpen(true);
                            
                        
                            }
                        }/> 
                    </div>
                
                }
            
                 {
                     Atributo === 'Iniciativa' ? '' : 
                     <div style={{paddingRight: '10px'}}>
                         <input type='image' src={isEditar ? cancenlar : editarImg} alt='row' width="40px" height="40px" onClick={()=>{
                 
                            if(isEditar){
                                setValor(valorPreEdicao);
                                setIsEditar(false);
                            }else{
                                setValorPreEdicao(valor);
                                setIsEditar(true);
                            }
                        }
                        }/> 
                     </div>
                 }
            
             {isEditar ? 
                <input type='image' src={confirmar} alt='row' width="40px" height="40px" onClick={()=>{

                        alterarValorBanco(valor);

                        setIsEditar(false);
                        
                   }
               }/> 
            :
            
               ''
            }
            </div>
         </div>
    );
}

export default CardAtributosNPC;