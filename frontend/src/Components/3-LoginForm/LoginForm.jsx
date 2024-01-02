import React from 'react';
import './LoginForm.css'

const LoginForm = () => {

  return (
    <div className="login-form-container">
      <form>
        <label htmlFor="username">Nom d'utilisateur:</label>
        <input
          type="text"
          id="username"
          name="username"
        />

        <label htmlFor="password">Mot de passe:</label>
        <input
          type="password"
          id="password"
          name="password"
        />

        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default LoginForm;
