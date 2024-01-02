import React from 'react';
import './UpdateForm.css'

const UpdateForm = () => {

  return (
    <div className="update-form-container">
      <form>
        <label htmlFor="title">Titre :</label>
        <input
          type="text"
          id="title"
          name="title"
        />

        <label htmlFor="slug">Slug :</label>
        <input
          type="text"
          id="slug"
          name="slug"
        />

        <label htmlFor="content">Contenu :</label>
        <textarea
          id="content"
          name="content"
        ></textarea>

        <button type="submit">Mettre à jour</button>
      </form>
    </div>
  );
}

export default UpdateForm;
