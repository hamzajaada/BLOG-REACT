import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  return (
    <header>
      
      <h1><Link className='Link-header' to="/Home">Blog</Link></h1>
      <div>
        <Link className='Link-header' to="/add-post">Ajoute</Link>
        <Link className='Link-header'  to="/">Login</Link>
        
      </div>
    </header>
  );
}

export default Header;
