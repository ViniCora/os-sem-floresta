import React, {useState, useEffect} from 'react';
import AtributosNPC from '../Atributos/AtributosNPC';
import Header from '../Header/Header';
import NpcDataService from '../Services/NpcService.js';

function Personagem({Nome}){

    const [atributes, setAtributes] = useState(null);
    const [mostrarTela, setMostrarTela] = useState(false);
    
    useEffect(() => {
        retrieveAtributes();
      }, []);


    const retrieveAtributes = () => {
        NpcDataService.getAtributes(Nome)
        .then((response) => {
        setAtributes(response.data[0]);
        setMostrarTela(response.data[0].mostrar_tela);
        })
        .catch((e) => {
        console.log(e);
        });
    };

    const [valueAdd, setValueadd] = useState(0);

    return(
        <div>
            <div>
                <Header></Header>
            </div>
            {
                atributes == null ? <h2>Carregando Página</h2> : 

                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
                paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: '#696969'}}>  
                        
                        <img style={{maxWidth: '200px', paddingLeft: '0px', paddingTop: '50px', paddingBottom: '50px'}} 
                        src={`https://rpg-image-api.herokuapp.com/${atributes.imagePath}`} 
                        alt={Nome} />
                        
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <h1 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px'}}>{Nome}</h1>
                            <h2 style={{paddingLeft: '20px', paddingTop: '50px', margin: '0px'}}>{`Data de nascimento: ${atributes.nascimento}`}</h2>
                            <h2 style={{paddingLeft: '20px', paddingTop: '10px', margin: '0px'}}>{`Ofício pré bomba: ${atributes.oficio_pre_base}`}</h2>
                            <h2 style={{paddingLeft: '20px', paddingTop: '10px', margin: '0px', paddingBottom: '40px'}}>{`Cargo da base: ${atributes.oficio_base}`}</h2>
                        </div>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', paddingBottom:'20px'}}>
                        <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Mostrar na Tier List?</label>
                        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', paddingBottom: '10px', paddingTop: '20px'}}>
                            <label style={{fontSize: '30px', paddingRight:'10px', color: '#fff'}}>Não</label>
                            <label class="switch"> 
                                <input type="checkbox" checked={mostrarTela ? true : false} onClick={()=>{
                                    var valueMostrar = false;
                                    if(mostrarTela){
                                        valueMostrar = false;
                                        setMostrarTela(false)
                                    }else{
                                        valueMostrar = true;
                                        setMostrarTela(true);
                                    }

                                    NpcDataService.updateMostrarTela(atributes._id, {value: valueMostrar})
                                    .then((response) => {
                                        console.log("Mostrar na tela inicial alterado com sucesso");
                                    })
                                    .catch((e) => {
                                    console.log(e);
                                    });
                                }} />
                                <span class="slider round"></span>
                            </label>
                            <label style={{fontSize: '30px', paddingLeft:'10px', color: '#fff'}}>Sim</label>
                        </div>
                    </div>

                    <AtributosNPC id={atributes._id} Força={atributes.força} Destreza={atributes.destreza} Carisma={atributes.carisma} Inteligencia={atributes.inteligencia} 
                        Resistencia={atributes.resistencia} Mira={atributes.mira} Oficio={atributes.oficio} Percepcao={atributes.percepcao} 
                        Vida={atributes.vida} nome={atributes.name} imagePath={atributes.imagePath}></AtributosNPC>
                </div>
            }
        </div>
    );
}

export default Personagem;