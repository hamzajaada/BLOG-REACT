import React from 'react';
import './AddForm.css'

const AddForm = () => {
  
  return (
    <div className="add-form-container">
      <form>
        <label htmlFor="title">Titre:</label>
        <input
          type="text"
          id="title"
          name="title"
        />

        <label htmlFor="slug">Slug:</label>
        <input
          type="text"
          id="slug"
          name="slug"
        />

        <label htmlFor="content">Contenu:</label>
        <textarea
          id="content"
          name="content"
        />

        <button type="submit">Ajouter Post</button>
      </form>
    </div>
  );
}

export default AddForm;
