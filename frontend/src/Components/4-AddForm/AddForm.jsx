import React, { useState } from 'react';
import './AddForm.css'
import axios from "axios"
import { useNavigate } from 'react-router-dom';

const AddForm = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const Navigate = useNavigate();

  function handelSubmit(e){
    e.preventDefault();
    console.log('avant');
    axios.post("http://localhost:3000/api/posts", {title,slug,content})
      .then((res)=>{
        console.log(res.data);
        Navigate('/')
      })
      .catch(err => console.log(err));
  }
  
  return (
    <div className="add-form-container">
      <form onSubmit={handelSubmit}>
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
          onChange={e=>(setTitle(e.target.value))}
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
