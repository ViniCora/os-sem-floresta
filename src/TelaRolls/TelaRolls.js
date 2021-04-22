import React, {useState, useEffect} from 'react';
import CardRolls from '../CardRolls/CardRolls.js';
import Header from '../Header/Header.js';
import RollsDataService from '../Services/RollsService.js';
import NPCDataService from '../Services/NpcService.js';
import AtributesDataService from '../Services/AtributesService.js';

function Iniciativa(){

    const [rolls, setRolls] = useState([]);
    const [personagens, setPersonagens] = useState([]);
    const [tamanho, setTamanho] = useState(0);

    useEffect(() => {
        getRolls();
        var newPersonagens = [];
        getPlayers(newPersonagens);
        getNPCs(newPersonagens);
        setPersonagens(newPersonagens);
      }, []);

      useEffect(() => {
        getRolls();
      }, [tamanho]);

      useEffect(() => {
        const interval = setInterval(() => {
            getRolls();
        }, 5000);
        return () => clearInterval(interval);
      }, []);

    function getRolls(){
        RollsDataService.getRolls()
        .then((response) => {
            var newRolls = response.data.reverse();
            setTamanho(newRolls.length);
            setRolls(newRolls);
        })
        .catch((e) => {
        console.log(e);
        });
    }

    function getPlayers(newPersonagens){
        AtributesDataService.getPlayers()
        .then((response) => {
            var players = response.data;
            players.forEach(player => {
                newPersonagens.push({value: player._id, label: player.name});
            });
        })
        .catch((e) => {
        console.log(e);
        });
    }

    function getNPCs(newPersonagens){
        NPCDataService.getNPC()
        .then((response) => {
            var NPCs = response.data;
            NPCs.forEach(NPC => {
                newPersonagens.push({value: NPC._id, label: NPC.name});
            });
        })
        .catch((e) => {
        console.log(e);
        });
    }

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style ={{paddingTop:'20px', color: '#fff'}}>Rolls</h1>
                <h1 style ={{paddingTop:'20px', color: '#ff0000', cursor: 'pointer'}} onClick={()=>{
                     RollsDataService.deleteAll()
                     .then((response) => {
                         console.log("Rolls deletados com sucesso.");
                         setTamanho(0);
                     })
                     .catch((e) => {
                     console.log(e);
                     });
                }}>{`->Limpar Rolls<-`}</h1>
            </div>
          
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', paddingTop: '20px'}}>
                {rolls == null ? 'Carregando' :  rolls.map((roll, index) => {
                return (
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <CardRolls Rolls={roll} Tamanho={tamanho} setTamanho={setTamanho} Personagens={personagens} ></CardRolls>
                    </div>
                );
                })}
            </div>

        </div>
    );
}

export default Iniciativa;