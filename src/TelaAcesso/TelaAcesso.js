import React from 'react';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';

function TelaAcesso(){
    return(
      <div>
        <Header></Header>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
          <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center',
        width:'400px', height: '30%', borderColor: '#fff', borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px', paddingTop: '10px'}}>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingTop:'17px'}}>
              <label style={{fontSize: '30px', paddingLeft:'10px', paddingRight:'10px', color: '#fff'}}>Usuário: </label>
                    <input 
                    style={{fontSize: '30px', color: '#fff' ,backgroundColor: '#000', maxWidth: '200px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                    borderBottomColor: '#fff', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} placeholder='"Luis Garcia"' 
                    type='text' onChange={(event)=>{
                        

                  }}></input>      
            </div>   
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
              <label style={{fontSize: '30px', paddingLeft:'10px', paddingRight:'10px', color: '#fff'}}>Senha: </label>
                    <input 
                    style={{fontSize: '30px', color: '#fff' ,backgroundColor: '#000', maxWidth: '200px', maxHeight: '50px', marginBottom: '50px', borderStyle: 'none', 
                    borderBottomColor: '#fff', borderBottomWidth: '2px', borderBottomStyle: 'solid', boxShadow: '#696969'}} placeholder='"Zapdos"' 
                    type='text' onChange={(event)=>{
                        

                  }}></input>      
            </div> 
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', paddingBottom:'20px'}}>
              <Link to="/escolher">
                <button style={{backgroundColor: '#000', color: '#fff',fontSize: '20px', borderColor: '#fff', 
                  borderRadius: '8px', borderStyle: 'solid', borderWidth: '2px'}} onClick={()=>{
                          alert();
                  }}>Entrar
                      
                  </button>
              </Link>
            </div>                   
          </div>
        </div>
      </div>
    );
}

export default TelaAcesso;