// ... (other imports)
import React from 'react';
import './Home.css'
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [posts, setPosts] = useState([]);
  const [username, setUsername] = useState(null);

  useEffect(() => {
      // Utilisez axios.defaults.withCredentials = true; dans votre configuration Axios globale.

      axios.get('http://localhost:3000/api/posts')
          .then(res => {
              // Récupération des articles et des informations de session depuis la réponse JSON
              const { posts, username } = res.data;
              setPosts(posts);
              setUsername(username);
          })
          .catch(err => console.log(err));

  }, []);

  function handleDelete(id) {
      console.log("delete");
      axios.delete(`http://localhost:3000/api/posts/${id}`)
          .then((res) => { 
              // Rechargez la page après la suppression
              window.location.reload();
          })
          .catch((err) => console.log(err));
  }

  return (
      <div className='Home'>
          <h1>Liste d'articles</h1>
          {
              posts.map((data) => (
                  <ul key={data._id}>
                      <li>
                          <p>{data.titre}</p>
                          <Link className="link-page" to={`/view-post/${data._id}`}>Lire</Link>
                          <Link className="link-page" to={`/update-post/${data._id}`}>Éditer</Link>
                          <button className="link-page" onClick={() => handleDelete(data._id)}>Supprimer</button>
                      </li>
                  </ul>
              ))
          }
          {username && (
              <div>
                  <p>Bienvenue, {username}!</p>
                  {/* Affichez d'autres informations en fonction de l'utilisateur connecté si nécessaire */}
              </div>
          )}
      </div>
  );
};
export default Home;

























