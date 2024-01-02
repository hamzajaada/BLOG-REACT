import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div>
      <h1>Liste des Articles</h1>
      <ul>
          <li>
            <p>Titre</p>
            <button >Lire</button>
            <button >Éditer</button>
            <button >Supprimer</button>
          </li>
      </ul>
    </div>
  );
}

export default Home;
