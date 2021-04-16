import React, {useState, useEffect} from 'react';
import CardIniciativa from '../CardIniciativa/CardIniciativa.js';
import Header from '../Header/Header.js';
import IniciativaDataService from '../Services/IniciativaService.js';


function Iniciativa(){

    const [iniciativas, setIniciativas] = useState([]);
    const [idPintado, setIdPintado] = useState(0);
    const [tamanho, setTamanho] = useState(0);

    useEffect(() => {
        retrieveIniciativa();
      });

    useEffect(() => {
        setPrimeiraIniciativa();
    },[]);

    useEffect(() => {
        setPrimeiraIniciativa();
    },[tamanho]);

    useEffect(() => {
        if(tamanho > 1){
            setPrimeiraIniciativa();
        }
    },[idPintado]);

    const retrieveIniciativa = () => {
        IniciativaDataService.getIniciativas()
        .then((response) => {
            var inis = response.data.sort((a,b) => {
                return a.value > b.value ? -1 : a.value < b.value ? 1 : 0;
              });
              
            setIniciativas(inis);
            setTamanho(inis.length);

        })
        .catch((e) => {
        console.log(e);
        });
    };

    function setPrimeiraIniciativa(){
        for(let i=0; i < iniciativas.length; i++){
            if(i === idPintado){
                IniciativaDataService.atualizaVez(iniciativas[i]._id, {value: true})
                .then((response) => {
                })
                .catch((e) => {
                console.log(e);
                });
            }else{
                IniciativaDataService.atualizaVez(iniciativas[i]._id, {value: false})
                .then((response) => {
                })
                .catch((e) => {
                console.log(e);
                });
            }
        }
    }

    return(
        <div>
            <Header></Header>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                <h1 style ={{paddingTop:'20px', color: '#fff'}}>Iniciativas</h1>
                <h1 style ={{paddingTop:'20px', color: '#ff0000', cursor: 'pointer'}} onClick={()=>{
                    IniciativaDataService.deleteAll()
                    .then((response) => {
                        console.log("Iniciativas deletadas com sucesso!");
                    })
                    .catch((e) => {
                    console.log(e);
                    });
                }}>{`->Limpar Iniciativas<-`}</h1>
                <h1 style ={{paddingTop:'20px', color: '#ff0000', cursor: 'pointer'}} onClick={()=>{
                    if(idPintado === (iniciativas.length - 1)){
                        setIdPintado(0);
                    }else{
                        var idNovo = idPintado + 1;
                        setIdPintado(idNovo);
                    }
                    

                }}>{`->Próximo na vez<-`}</h1>
            </div>
          
            <div style={{display: 'flex', flexDirection:'column', justifyContent: 'center', paddingTop: '20px'}}>
                {iniciativas == null ? 'Carregando' :  iniciativas.map((iniciativa, index) => {
                return (
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                        <CardIniciativa Atributes={iniciativa} index={index} ></CardIniciativa>
                    </div>
                );
                })}
            </div>

        </div>
    );
}

export default Iniciativa;