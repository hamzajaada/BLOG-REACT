import React, { useState } from 'react';
import './AddForm.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const [titre, setTitre] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const navigate = useNavigate();

  function handelSubmit(e){
    e.preventDefault();
    console.log('avant');
    axios.post("http://localhost:3000/api/posts", {titre,slug,content})
      .then(
        res=>{
          console.log('après')
          navigate('/')
        }
      )
      .catch(err => console.log(err));
  }
  
  return (
    <div className="add-form-container">
      <form onSubmit={handelSubmit}>
        <label htmlFor="titre">Titre:</label>
        <input
          type="text"
          id="titre"
          name="titre"
          onChange={e=>(setTitre(e.target.value))}
        />

        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          name="slug"
          onChange={e=>(setSlug(e.target.value))}
        />

        <label htmlFor="content">Contenu:</label>
        <textarea
          id="content"
          name="content"
          onChange={e=>(setContent(e.target.value))}
        />

        <button type="submit">Ajouter Post</button>
      </form>
    </div>
  );
}

export default AddForm;
