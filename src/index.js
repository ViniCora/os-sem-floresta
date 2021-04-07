import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Personagem from './PersonagensPaginas/Personagem';
import AtributesDataService from './Services/AtributesService.js';
import CadPersonagem from './CadPersonagem/CadPersonagem';


window.onload = function(){
  AtributesDataService.getPlayers()
        .then((response) => {
        console.log(response.data[2].name);
        console.log(response.data[6].name.replace(/\s/g, ''))
        const data = response.data;
        ReactDOM.render(
          <BrowserRouter>
          <Switch>
            <Route path="/" component={App} exact />
            <Route path="/cadastrarPersonagem" component={CadPersonagem} exact />
            {data == null ? '' :  data.map((d, index) => {

              return (
                <Route path={data == null ? '' : `/personagens/${d.name.replace(/\s/g, '')}`}><Personagem Nome={data == null ? 'Luis Garcia Do Nascimento' : `${d.name}`}></Personagem></Route>
              );
              })}
          </Switch>
        </BrowserRouter>,
          document.getElementById('root')
        );
        })
        .catch((e) => {
        console.log(e);
        });
}