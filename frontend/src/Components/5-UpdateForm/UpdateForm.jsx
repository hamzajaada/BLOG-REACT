import React from 'react';
import './UpdateForm.css'
import { useEffect ,useState } from 'react';
const UpdateForm = () => {

  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    // Utilisez useEffect pour charger les données existantes du post à mettre à jour
    // (si vous avez besoin de pré-remplir le formulaire avec les données existantes)
    // Exemple fictif :
    // fetchPostData(postId).then(data => {
    //   setTitle(data.title);
    //   setSlug(data.slug);
    //   setContent(data.content);
    // });
  }, []); // Assurez-vous de dépendre de toutes les variables nécessaires

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSlugChange = (e) => {
    setSlug(e.target.value);
  };

  const handleContentChange = (e) => {
    setContent(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour traiter la soumission du formulaire (mise à jour, appel API, etc.)
  };

  return (
    <div className="update-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="slug">Slug :</label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={slug}
          onChange={handleSlugChange}
        />

        <label htmlFor="content">Contenu :</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        ></textarea>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdateForm;
