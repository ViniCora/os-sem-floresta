import React, {useState, useEffect} from 'react';
import lixo from '../Icons/lixo.png'
import IniciativaDataService from '../Services/IniciativaService.js';


function CardIniciativa({Atributes, index}){

    const [color, setColor] = useState("#696969");

    useEffect(() => {
        if(Atributes.vez){
            setColor("#ff0000");
        }else{
            setColor("#696969");
        }
      });

    function deletarIniciativa(id){

        console.log(id);

        IniciativaDataService.deleteOne(id)
        .then((response) => {
           console.log("Iniciativa deletada com sucesso")
        })
        .catch((e) => {
        console.log(e);
        });
    }

    return(
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: color, height: '300', width: '800px'}}>  

            <div style={{ paddingTop: '10px'}}>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{`${index + 1}°`}</h1>
            </div>

            <div>
                <img style={{width: '75px', height: '75px', borderRadius: '50%'}}
                 src={`https://rpg-image-api.herokuapp.com/${Atributes.imagePath}`} 
                alt={Atributes.name} />
            </div>

            <div style={{ paddingTop: '10px'}}>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{Atributes.name}</h1>
            </div>

            <div style={{ paddingTop: '10px'}}>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{`Iniciativa: ${Atributes.value}`}</h1>
            </div>
            
            <div style={{ paddingTop: '20px'}}>
                <input type='image' src={lixo} alt='row' width="40px" height="40px" onClick={()=>{
                    deletarIniciativa(Atributes._id);
                }
                }/> 
            </div>

        </div>
    )
}

export default CardIniciativa;