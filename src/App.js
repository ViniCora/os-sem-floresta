import './App.css';
import './TelaAcesso/TelaAcesso.js'

import { Link } from 'react-router-dom';
import Header from './Header/Header.js';
import React, {useState, useEffect} from 'react';
import AtributesDataService from './Services/AtributesService.js';
import CardPersonagem from './CardPersonagem/CardPersonagem';


function App() {
  const [playersAtribute, setPlayersAtribute] = useState([]);
  const [value, setValue] = useState(0);
  
  useEffect(() => {
    retrieveAtributes();
  });


  const retrieveAtributes = () => {
    AtributesDataService.getPlayers()
    .then((response) => {

    var data = response.data.sort((a,b) => {
      return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
    });

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
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Link to={`/cadastrarPersonagem`}>
            <h1 style ={{paddingTop:'20px', fontSize: '28px', color: '#696969', width: '400px'}}>Cadastre um novo Personagem</h1>
          </Link>
        </div>
        <div>
          <h1 style ={{paddingTop:'20px', color: '#fff'}}>Escolha um pesonagem:</h1>
        </div>
        <div style={{display: 'flex', flexDirection:'row', justifyContent: 'space-evenly', paddingTop: '30px'}}>
            {playersAtribute == null ? 'Carregando' :  playersAtribute.map((player, index) => {
              if(!player.mostrar_tela){
                return;
              }
              return (
                <div style={{display: 'flex', flexDirection: 'column'}}>
                  <Link to={`/personagens/${player.name.replace(/\s/g, '')}`}>
                     <CardPersonagem Atributes={player}></CardPersonagem>    
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
