import React, {useEffect} from 'react';

function CardPersonagem({Atributes}){

    return(
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px',
            paddingLeft: '10px', paddingRight: '10px', backgroundColor: '#696969', width: '300px', height: '200px'}}>  
        
            <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
                <img style={{width: '110px', height: '120px', paddingTop: '10px', paddingBottom: '5px', borderRadius: '50%'}}
                 src={`https://rpg-image-api.herokuapp.com/${Atributes.imagePath}`} 
                alt={Atributes.name} />
                <h1 style={{paddingLeft: '30px', margin: '0px'}}>{Atributes.name}</h1>
            </div>


        </div>
    )
}

export default CardPersonagem;