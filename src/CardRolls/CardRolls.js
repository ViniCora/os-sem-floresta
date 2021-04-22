import React, {useState, useEffect} from 'react';
import lixo from '../Icons/lixo.png'
import dados from '../Icons/Dados.png'
import RollsDataService from '../Services/RollsService.js';
import NPCDataService from '../Services/NpcService.js';
import AtributesDataService from '../Services/AtributesService.js';
import Modal from 'react-modal';
import Select from 'react-select'

function CardIniciativa({Rolls, Tamanho, setTamanho, Personagens}){

    const customStyles = {
        content : {
          top                   : '15%',
          left                  : '30%',
          marginRight           : '-50%',
          width                 : '40%',
          height                : '70%',
          backgroundColor       : '#696969',
          borderColor           : '#000', 
          borderRadius          : '8px', 
          borderStyle           : 'solid', 
          borderWidth           : '2px',
        }
      };

    const [color, setColor] = useState("#696969");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [hasRoll, setHasRoll] = useState(false);
    const [personagemSelected, setPersonagemSelected] = useState(null);
    const [atributeSelected, setAtributeSelected] = useState(null);
    const [atributes, setAtributes] = useState([]);
    const [contestação, setContestação] = useState(0);

    useEffect(() => {
        if(Rolls.sucesso){
            setColor("#008000");
        }else{
            setColor("#ff0000");
        }

      });

      useEffect(() => {
        Personagens.sort((a,b) => {
            return a.label > b.label ? 1 : a.label < b.label ? -1 : 0;
          });
      }, []);

    useEffect(() => {
        if(personagemSelected != null){
            setAtributeSelected(null);
            AtributesDataService.getAtributes(personagemSelected.label)
            .then((response) => {
                if(response.data.length !== 0){
                    var atributos = [];
                    atributos.push({value: response.data[0].força, label: `Força: ${response.data[0].força}`});
                    atributos.push({value: response.data[0].destreza, label: `Destreza: ${response.data[0].destreza}`});
                    atributos.push({value: response.data[0].carisma, label: `Carisma: ${response.data[0].carisma}`});
                    atributos.push({value: response.data[0].inteligencia, label: `Inteligência: ${response.data[0].inteligencia}`});
                    atributos.push({value: response.data[0].resistencia, label: `Resistência: ${response.data[0].resistencia}`});
                    atributos.push({value: response.data[0].mira, label: `Mira: ${response.data[0].mira}`});
                    atributos.push({value: response.data[0].oficio, label: `Ofício: ${response.data[0].oficio}`});
                    atributos.push({value: response.data[0].percepcao, label: `Percepção: ${response.data[0].percepcao}`});
                    setAtributes(atributos);
                }else{
                    AtributesDataService.getAtributes(personagemSelected.label)
                     .then((response) => {
                    if(response.data.length !== 0){
                        var atributos = [];
                        atributos.push({value: response.data[0].força, label: "Força"});
                        atributos.push({value: response.data[0].destreza, label: "Destreza"});
                        atributos.push({value: response.data[0].carisma, label: "Carisma"});
                        atributos.push({value: response.data[0].inteligencia, label: "Inteligência"});
                        atributos.push({value: response.data[0].resistencia, label: "Resistência"});
                        atributos.push({value: response.data[0].mira, label: "Mira"});
                        atributos.push({value: response.data[0].oficio, label: "Ofício"});
                        atributos.push({value: response.data[0].percepcao, label: "Percepção"});
                        setAtributes(atributos);
                    }else{
                        console.log("Esse personagem não existe!")
                    }
                    })
                    .catch((e) => {
                    console.log(e);
                    });
                }
             })
             .catch((e) => {
             console.log(e);
             });
        }
      }, [personagemSelected]);
    
    function deletarRoll(id){

        RollsDataService.deleteOne(id)
        .then((response) => {
           console.log("Roll deletado com sucesso")
        })
        .catch((e) => {
        console.log(e);
        });
    }

    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: color, height: '300', width: '75%'}}>  

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={()=>{setIsOpen(false); setPersonagemSelected(null); setAtributeSelected(null); setHasRoll(false);}}
              style={customStyles}
              contentLabel="Example Modal"
            >
                <div style={{display:'flex', flexDirection: 'column', alignItems: 'center', borderBottomColor: '#000', borderBottomWidth: '2px', borderBottomStyle: 'solid'}}>
                    <h2 style={{fontSize:'30px'}}>Contestação de {Rolls.atributo}</h2>
                </div>
                { 
                    hasRoll ? 
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}> 
                        <div>
                            <h2 style={{ fontSize: '25px', marginBottom: '20px', marginTop: '20px'}}>{`Valor à ser contestado: ${Rolls.valorContestação}`}</h2>
                        </div>
                        <div>
                            <h2 style={{ fontSize: '25px', marginBottom: '20px', marginTop: '20px'}}>{`Valor da contestação: ${contestação}`}</h2>
                        </div>

                        <div>
                            { 
                                contestação < Rolls.valorContestação ? 
                                <h2 style={{ fontSize: '25px', marginBottom: '20px', marginTop: '20px'}}>{`${Rolls.name} ganhou a contestação`}</h2>
                                :
                                <h2 style={{ fontSize: '25px', marginBottom: '20px', marginTop: '20px'}}>{`${personagemSelected.label} ganhou a contestação`}</h2>
                            }
                        </div>
                        <div style={{paddingTop: '100px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                    setIsOpen(false); setPersonagemSelected(null); setAtributeSelected(null); setHasRoll(false);
                                }
                                }>Fechar</button>
                            </div>
                    </div>
                    :
                    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                        <div>
                            <h2 style={{ fontSize: '20px', marginBottom: '20px'}}>Escolha um personagem para contestar o roll:</h2>
                        </div>
                        <div style={{width: '300px'}}>
                            <Select width={'300px'} options={Personagens} placeholder={`Personagens...`} onChange={setPersonagemSelected}/>
                        </div>
                        {personagemSelected == null ? '' : 
                            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                                <div>
                                    <h2 style={{ fontSize: '20px', marginTop: '30px'}}>{`Deseja contestar com qual atributo do personagem ${personagemSelected.label}?`}</h2>
                                </div>
                                <div style={{width: '300px'}}>
                                    <Select width={'300px'} options={atributes} placeholder={`Atributos...`} onChange={setAtributeSelected}/>
                                </div>
                            </div>
                        }
                        {personagemSelected !== null && atributeSelected !== null ? 
                            <div style={{paddingTop: '100px'}}>
                                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                                borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', marginTop: '10px'}} onClick={()=>{
                                    setHasRoll(true);
                                    var newRoll = (Math.floor(Math.random() * 100) + 1);
                                    var cont = Math.ceil((atributeSelected.value * newRoll)/100);
                                    setContestação(cont);
                                }
                                }>Contestar</button>
                            </div>
                        : 
                            ''
                        }
                    </div>

                }

            </Modal>

            <div style={{ paddingTop: '25px'}}>
                <img style={{width: '75px', height: '75px', borderRadius: '50%'}}
                 src={`https://rpg-image-api.herokuapp.com/${Rolls.imagePath}`} 
                alt={Rolls.name} />
            </div>

            <div style={{ paddingTop: '30px'}}>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{Rolls.name}</h1>
            </div>

            <div style={{ paddingTop: '5px', paddingBottom: '5px'}}>
                <h1 style={{paddingTop:'5px', paddingBottom: '10px', margin: '0px'}}>{`${Rolls.atributo}: ${Rolls.valorRodado}`}</h1>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{`Contestação: ${Rolls.valorContestação}`}</h1>
            </div>
            
            
            <div style={{ paddingTop: '40px'}}>
                <input style={{paddingRight: '10px'}} type='image' src={dados} alt='row' width="40px" height="40px" onClick={()=>{
                       setIsOpen(true);
                 }
                }/> 
                <input type='image' src={lixo} alt='row' width="40px" height="40px" onClick={()=>{
                    deletarRoll(Rolls._id);
                    var tam = Tamanho - 1;
                    setTamanho(tam);
                }
                }/> 
            </div>

        </div>
    )
}

export default CardIniciativa;