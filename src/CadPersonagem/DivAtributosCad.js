import React from 'react';

function DivAtributoCad({Atributo, Value, setValue}){

    function getPadding(Atributo){
        switch (Atributo) {
            case 'Força':
              return 335;
            case 'Destreza':
              return 291;
            case 'Carisma':
              return 299;
            case 'Inteligência':
              return 254;;
            case 'Resistência':
              return 260;
            case 'Mira':
              return 344;
            case 'Ofício':
              return 326;
            case 'Percepção':
              return 266;
            default:
              return 10;
          }
    }

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
              <label style={{fontSize: '30px', paddingLeft: getPadding(Atributo), paddingRight:'10px', color: '#fff'}}>{Atributo}: </label>
                    <input value = {Value}
                    style={{fontSize: '30px', color: '#fff' ,backgroundColor: '#000', width: '50px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                    borderBottomColor: '#fff', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} 
                    type='number' onChange={(event)=>{
                      var value = event.target.value;

                      if(value <= 100 && value >= -100){
                        setValue(value);
                      }

                  }}></input>      
            </div> 
    );
}

export default DivAtributoCad;