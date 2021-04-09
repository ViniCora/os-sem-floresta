import React, {useState} from 'react';

function CardPersonagemComSwitch({Atributes, playersParaAtualizar, setPlayersParaAtualizar}){
    const [playerSwitch, setPlayerSwitch] = useState(false);
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: '#696969', width: '300px'}}>  
        
            <div>
                <img style={{width: '110px', height: '120px', paddingTop: '10px', paddingBottom: '5px', borderRadius: '50%'}}
                 src={`https://os-sem-floresta-api.herokuapp.com/${Atributes.imagePath}`} 
                alt={Atributes.name} />
            </div>

            <div>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{Atributes.name}</h1>
            </div>

            <div style={{paddingTop: '5px', paddingBottom: '10px'}}>
                <label class="switch"> 
                    <input type="checkbox" onClick={()=>{
                        if(!playerSwitch){
                            setPlayerSwitch(true);
                            if(playersParaAtualizar == null){
                                var players = [];
                                players.push(Atributes);
                                setPlayersParaAtualizar(players);
                            }else{
                                var players = playersParaAtualizar;
                                players.push(Atributes);
                                setPlayersParaAtualizar(players);
                            }
                        }else{
                            var index = playersParaAtualizar.findIndex(e => e.name === Atributes.name);
                            var players = playersParaAtualizar;
                            players.splice(index, 1);
                            setPlayerSwitch(false);
                        }
                    }} />
                    <span class="slider round"></span>
                </label>
            </div>

        </div>
    )
}

export default CardPersonagemComSwitch;