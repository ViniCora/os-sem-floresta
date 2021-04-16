import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="Header">
          <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
          <Link to="/">
            <p style ={{color: '#fff'}}>OS SEM FLORESTA</p>
          </Link>
          <Link to="/">
            <p style ={{color: '#fff'}}>ARCO 2</p>
          </Link>
          </div>
        </header>
    );
}

export default Header;