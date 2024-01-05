import React from 'react';
import './Header.css'
import {Link} from 'react-router-dom'

const Header = () => {
  
  const token = window.localStorage.getItem("token");
  function handeLogout(e){
     window.localStorage.removeItem("token")
     window.location.reload();
  }
  return (
    <header>
      
      <h1><Link className='Link-header' to="/Home">Blog</Link></h1>
      <div>
        
        {token ? (
          <>
            <Link className='Link-header' to="/add-post">Ajouter</Link>
            <button className='Link-header' onClick={handeLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link className='Link-header' to="/">Login</Link>
          </>
        )}
       
        

        
      </div>
    </header>
  );
}

export default Header;
