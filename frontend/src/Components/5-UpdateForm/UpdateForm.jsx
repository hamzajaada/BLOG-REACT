import React from 'react';
import './UpdateForm.css';
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { useParams, useNavigate } from 'react-router-dom';
const UpdateForm = () => {

  const [titre, setTitre] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');

  const{id} =useParams();
  const navigate = useNavigate();
  useEffect(()=>{
    axios.get(`http://localhost:3000/api/posts/${id}`)
    .then(res=>{ 
        const postData = res.data;
        setTitre(postData.titre);
        setSlug(postData.slug);
        setContent(postData.content);
    })
    .catch(err=>console.log(err));
  },[id])
  function handelUpdate(e) {
    e.preventDefault();
    axios.put(`http://localhost:3000/api/posts/${id}`, {titre,slug,content})
      .then(res=>{
          navigate('/Home')
        }
      )
      .catch(err => console.log(err));
    
  }

  return (
    <div className="update-form-container">
      <form onSubmit={handelUpdate}>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={titre}
          onChange={(e) => setTitre(e.target.value)}
        />

        <label htmlFor="slug">Slug :</label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <label htmlFor="content">Contenu :</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdateForm;
