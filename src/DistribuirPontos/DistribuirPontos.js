import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';

import AtributesDataService from '../Services/AtributesService.js';
import CardPersonagemComSwitch from '../CardPersonagemComSwitch/CardPersonagemComSwitch';

function DistribuirPontos(){

    const [points, setPoints] = useState(0);
    const [playersAtribute,setPlayersAtribute] = useState(null);
    const [playersParaAtualizar, setPlayersParaAtualizar] = useState(null);

    useEffect(() => {
        retrieveAtributes();
      });
    
    
      const retrieveAtributes = () => {
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

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', paddingTop: '30px'}}>
                {playersAtribute == null ? 'Carregando' :  playersAtribute.map((player, index) => {
                return (
                    <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
                        <CardPersonagemComSwitch Atributes={player} playersParaAtualizar={playersParaAtualizar} setPlayersParaAtualizar={setPlayersParaAtualizar}
                        ></CardPersonagemComSwitch>
                    </div>
                );
                })}
            </div>
                
              <label style={{fontSize: '30px', color: '#fff'}}>Novos pontos para distribuir: </label>
                    <input value = {points}
                    style={{fontSize: '30px', color: '#fff' ,backgroundColor: '#000', width: '50px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                    borderBottomColor: '#fff', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} 
                    type='number' onChange={(event)=>{
                      var value = event.target.value;
                      
                      setPoints(value);

                  }}></input>      
            </div> 
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom:'20px'}}>
                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                  borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                        playersParaAtualizar.forEach((player)=>{
                            var pontosAntigos = player.pontos_adicionar;
                            var pontosNovos = pontosAntigos + parseInt(points);
                            
                            AtributesDataService.updatePontosAdicionar(player._id, {value: pontosNovos})
                            .then((response) => {
                                console.log("Pontos à adicionar alterados com sucesso");
                                setPoints(0);
                            })
                            .catch((e) => {
                            console.log(e);
                            });
                        });
                  }}>Enviar
                      
                  </button>
            </div>
        </div>
    );
}

export default DistribuirPontos;