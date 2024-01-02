import React from 'react';
import './LoginForm.css'
import {useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
const LoginForm = () => {
  // useState est declarer avant return :
    //  useState => creation dans variable avec sa fonction qui change son etat.
  const [username ,SetUsername]= useState('');
  const [password ,SetPassword]= useState('');
  // useNavigate ==> permet de trasmet avec le path
  const navigate = useNavigate();
  function handelLogin(e){
    // empecher l'evenement de formulaire
    e.preventDefault();
    // console.log("Avant");
    // console.log(username);
    // console.log(password);
    axios.post('http://localhost:3000/api/login',{username,password}).then(
      res=>{
        navigate('/')
      }
    ).catch(err=>console.log(err));

  }
  return (
    <div className="login-form-container">
    {/* on Submit faire appel a la fonction lorsque vous cliquer sur le button submit */}
      <form onSubmit={handelLogin}>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          name="username"
          // prendre la valeur de input apres chaque changement 
          onChange={e=>SetUsername(e.target.value)}
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={e=>SetPassword(e.target.value)}
        />

        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginForm;
