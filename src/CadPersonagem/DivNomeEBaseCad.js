import React from 'react';

function DivNomeEBaseCad({Atributo, Value, setValue}){

    function getPadding(Atributo){
        switch (Atributo) {
            case 'Nome':
              return 130;
            case 'Jogador':
              return 103;
            case 'Nascimento':
              return 53;
            case 'Ofício Base':
              return 63;
            case 'Ofício Pré Base':
              return 10;
            default:
              console.log();
          }
    }

    return(
        <div style={{display: 'flex', flexDirection: 'row'}}>
              <label style={{fontSize: '30px', paddingLeft: getPadding(Atributo), paddingRight:'10px', color: '#fff'}}>{Atributo}: </label>
                    <input value={Value}
                    style={{fontSize: '30px', color: '#fff' ,backgroundColor: '#000', width: '500px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                    borderBottomColor: '#fff', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} 
                    type='text' onChange={(event)=>{
                      var value = event.target.value;

                     
                      setValue(value);
                      

                  }}></input>      
            </div> 
    );
}

export default DivNomeEBaseCad;