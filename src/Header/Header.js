import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

function Header(){
    return(
        <header className="Header">
          <Link to="/">
          <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
            <p style ={{color: '#fff'}}>OS SEM FLORESTA</p>
            <p style ={{color: '#fff'}}>ARCO 2</p>
          </div>
          </Link>
        </header>
    );
}

export default Header;