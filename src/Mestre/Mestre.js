import React, {useEffect, useState} from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import NPCDataService from '../Services/NpcService.js';
import AtributesDataService from '../Services/AtributesService.js';
import ConstanteDataService from '../Services/ConstantesService.js';
import CardPersonagem from '../CardPersonagem/CardPersonagem';
import plus from '../Icons/plus.png'
import minus from '../Icons/minus.png'

function Mestre(){

    const [playersAtribute, setPlayersAtribute] = useState([]);
    const [NPCAtribute, setNPCAtribute] = useState([]);
    const [valorSessao, setValorSessao] = useState(0);

    useEffect(() => {
        retrieveNPC();
        retrievePlayers();
        retrieveValorSessao();
      }, []);

      const retrieveValorSessao = () => {
        ConstanteDataService.getConstante("arco2_total")
        .then((response) => {
            setValorSessao(response.data[0].value);
        })
        .catch((e) => {
        console.log(e);
        });
      }
      
      const attValorSessao = (value) => {
        ConstanteDataService.updateConstante("arco2_total", {value: value})
        .then((response) => {
            console.log("Sessão atual alterada com sucesso");
        })
        .catch((e) => {
        console.log(e);
        });
      };
    
      const retrievePlayers = () => {
        AtributesDataService.getPlayers()
        .then((response) => {
    
        var data = response.data.sort((a,b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
    
        setPlayersAtribute(response.data);
        })
        .catch((e) => {
        console.log(e);
        });
    };


      const retrieveNPC = () => {
        NPCDataService.getNPC()
        .then((response) => {

            console.log(response.data)
    
        var data = response.data.sort((a,b) => {
          return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
        });
    
        setNPCAtribute(response.data);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <h1 style ={{paddingTop:'20px', color: '#fff'}}>Página do Mestre:</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly'}}>
                <Link to={`/cadastrarPersonagem`}>
                    <h1 style ={{paddingTop:'5px', color: '#696969', cursor: 'pointer'}}>{`->CadastrarPlayer<-`}</h1>
                </Link>
                <Link to={`/cadastrarNPC`}>
                    <h1 style ={{paddingTop:'5px', color: '#696969', cursor: 'pointer'}}>{`->CadastrarNPC<-`}</h1>
                </Link>
                <Link to={`/distribuirPontos`}>
                    <h1 style ={{paddingTop:'5px', color: '#696969', cursor: 'pointer'}}>{`->Distribuir Pontos<-`}</h1>
                </Link>
                <Link to={`/rolls`}>
                    <h1 style ={{paddingTop:'5px', color: '#696969', cursor: 'pointer'}}>{`->Rolls<-`}</h1>
                </Link>

            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                 <div>
                    <label style ={{color: '#fff', fontSize: '30px'}}>{`Alterar N° da sessão do arco: `}</label>
                 </div>
                 <div style={{marginLeft: '20px', backgroundColor: '#696969', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}}>
                    <input type='image' src={minus} alt='row' width="40px" height="40px" onClick={()=>{
                        var newValorSessao = valorSessao - 1;
                        setValorSessao(newValorSessao);
                        attValorSessao(newValorSessao);
                        alert(`Valor da sessão subtraido para ${newValorSessao} com sucesso!`);
                        window.location.reload();
                    }
                    }/> 
                </div>
                <div style={{marginLeft: '20px', backgroundColor: '#696969', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}}>
                    <input type='image' src={plus} alt='row' width="40px" height="40px" onClick={()=>{
                        var newValorSessao = valorSessao + 1;
                        setValorSessao(newValorSessao); 
                        attValorSessao(newValorSessao);
                        alert(`Valor da sessão adicionado para ${newValorSessao} com sucesso!`);
                        window.location.reload();
                    }
                    }/> 
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style ={{paddingTop:'20px', color: '#fff'}}>Jogadores:</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', paddingTop: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'block', alignContent: 'center', justifyContent: 'space-evenly', maxWidth: `80%`, marginLeft: '14%', marginRight: '6%'}}>
                        {playersAtribute == null ? 'Carregando' :  playersAtribute.map((player, index) => {
                            if(!player.mostrar_tela){
                            return;
                            }
                            return (
                            <div style={{display: 'inline-block', paddingLeft: '20px', alignContent: 'space-between', marginBottom: '50px'}}>
                                <Link style={{textDecoration: 'none'}} to={`/personagens/${player.name.replace(/\s/g, '')}`}>
                                <CardPersonagem Atributes={player}></CardPersonagem>    
                                </Link>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                <h1 style ={{paddingTop:'20px', color: '#fff'}}>NPCs:</h1>
            </div>
            <div style={{display: 'flex', flexDirection: 'column', alignContent: 'center', justifyContent: 'center', paddingTop: '50px'}}>
                <div style={{display: 'flex', flexDirection: 'row', alignContent: 'center', justifyContent: 'center'}}>
                    <div style={{display: 'block', alignContent: 'center', justifyContent: 'space-evenly', maxWidth: `80%`, marginLeft: '14%', marginRight: '6%'}}>
                        {NPCAtribute == null ? 'Carregando' :  NPCAtribute.map((NPC, index) => {
                            
                            return (
                            <div style={{display: 'inline-block', paddingLeft: '20px', alignContent: 'space-between', marginBottom: '50px'}}>
                                <Link style={{textDecoration: 'none'}} to={`/npc/${NPC.name.replace(/\s/g, '')}`}>
                                <CardPersonagem Atributes={NPC}></CardPersonagem>    
                                </Link>
                            </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mestre;