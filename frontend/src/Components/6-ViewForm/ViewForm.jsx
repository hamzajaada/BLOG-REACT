import React from 'react';
import './ViewForm.css';
import axios from 'axios';
import { useEffect ,useState} from 'react';
import { useParams } from 'react-router-dom';
const ViewForm = () => {

  const [titre, setTitre] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const{id} =useParams();
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
  

  return (
    <div className="view-form-container">
        <h2 >Titre :</h2>
        <p>{titre}</p>
        <h2 >Slug :</h2>
        {/* {variable} */}
        <p>{slug}</p>
        <h2>Contenu :</h2>
        <p>{content}</p>
    </div>
  );
}

export default ViewForm;
