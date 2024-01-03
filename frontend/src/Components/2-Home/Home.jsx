import React from 'react';
import './Home.css'
import axios from 'axios';
import { useEffect ,useState } from 'react';
const Home = () => {
    const [Posts , setPosts] = useState([]);
    // int Posts =int[];
    useEffect(()=>{
       axios.get('http://localhost:3000/api/posts')
       .then(res=>setPosts(res.data))
       .catch(err=>console.log(err));
    },[])


  return (
    <div className='Home'>
      <h1>Liste des Articles</h1>
      {
        Posts.map((data)=>(
         <ul key = {data._id}>
          <li>
            <p>{data.titre}</p>
            <button >Lire</button>
            <button >Éditer</button>
            <button >Supprimer</button>
          </li>
      </ul>
        ))
      }
     
    </div>
  );
}

export default Home;
