import React from 'react';
import './AddForm.css'
import { useEffect ,useState } from 'react';
const AddForm = () => {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');

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
    // Ajoutez ici la logique pour traiter la soumission du formulaire (envoi API, etc.)
  };

  return (
    <div className="add-form-container">
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={title}
          onChange={handleTitleChange}
        />

        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          name="slug"
          value={slug}
          onChange={handleSlugChange}
        />

        <label htmlFor="content">Contenu:</label>
        <textarea
          id="content"
          name="content"
          value={content}
          onChange={handleContentChange}
        />

        <button type="submit">Ajouter Post</button>
      </form>
    </div>
  );
}

export default AddForm;
