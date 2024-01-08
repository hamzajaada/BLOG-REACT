// ... (other imports)
import React from "react";
import "./Home.css";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const token = window.localStorage.getItem("token");

  useEffect(()=>{
    // Utilisez axios.defaults.withCredentials = true; dans votre configuration Axios globale.
    axios.get("http://localhost:3000/api/posts")
      .then((res) => {
        // res = Header /data/...
        // Récupération des articles et des informations de session depuis la réponse JSON
        const posts = res.data;
        setPosts(posts);
      })
      .catch((err) => console.log(err));
  },[]);
// axios  put / delete
  function handleDelete(id) {
    axios.delete(`http://localhost:3000/api/posts/${id}`)
      .then((res) => {
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className="Home">
      <h1>Liste d'articles</h1>
      {
      posts.map(
        (data) => (
                // valeur unique
                <ul key={data._id}>
                  <li>
                    <p>{data.titre}</p>
                    {/* return react {} */}
                    {/* `${  }` */}
                    <Link className="link-page" to={`/view-post/${data._id}`}>
                      Lire
                    </Link>
                    {token && (
                      <>
                        <Link className="link-page" to={`/update-post/${data._id}`}>
                          Éditer
                        </Link>
                            <button
                              className="link-page"
                              onClick={() => handleDelete(data._id)}
                            >
                              Supprimer
                            </button>
                      </>
                    )}
                  </li>
                </ul>
         )
      )
      }
    </div>
  );
};
export default Home;
