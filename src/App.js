import './App.css';
import './TelaAcesso/TelaAcesso.js'

import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import React, {useState, useEffect} from 'react';
import AtributesDataService from './Services/AtributesService.js';


function App() {
  const [playersAtribute, setPlayersAtribute] = useState([]);
 
  
  useEffect(() => {
    retrieveAtributes();
  }, []);

  const retrieveAtributes = () => {
    AtributesDataService.getPlayers()
    .then((response) => {
    setPlayersAtribute(response.data);
    })
    .catch((e) => {
    console.log(e);
    });
};

  return (
    <div className="App">
      <Header></Header>
      <body>
        <div>
          <h1 style ={{paddingTop:'50px', color: '#fff'}}>Escolha o pesonagem</h1>
        </div>
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'center', paddingTop: '30px'}}>
            {playersAtribute == null ? 'Carregando' :  playersAtribute.map((player, index) => {
              if(!player.mostrar_tela){
                return;
              }
              return (
                <div style={{paddingLeft:"40px"}}>
                  <Link to={`/personagens/${player.name.replace(/\s/g, '')}`}>
                    <img style={{width: '220px', height: '240px',paddingLeft: '0px'}} src={`https://os-sem-floresta-api.herokuapp.com/${player.imagePath}`} alt={player.name} />
                  </Link>
              </div>
              );
            })}
        </div>
      </body>
    </div>
  );
}

export default App;
