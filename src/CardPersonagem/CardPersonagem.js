import React from 'react';

function CardPersonagem({Atributes}){
    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-around', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', marginTop: '20px', marginBottom: '50px', backgroundColor: '#696969', width: '175px', height: '275px'}}>  
        
            <div>
                <img style={{width: '110px', height: '120px', paddingTop: '10px', paddingBottom: '5px', borderRadius: '50%'}}
                 src={`https://os-sem-floresta-api.herokuapp.com/${Atributes.imagePath}`} 
                alt={Atributes.name} />
            </div>

            <div>
                <h1 style={{paddingTop: '5px', paddingBottom: '10px', margin: '0px'}}>{Atributes.name}</h1>
            </div>

        </div>
    )
}

export default CardPersonagem;