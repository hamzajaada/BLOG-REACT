// ... (other imports)
import React from 'react';
import './Home.css'
import axios from 'axios';
import { useEffect ,useState } from 'react';
import { Link } from 'react-router-dom';


const Home = () => {
  const [Posts , setPosts] = useState([]);
  const [username, setUsername] = useState(null);
  // int Posts =int[];
  useEffect(()=>{
    
     axios.get('http://localhost:3000/api/posts').then(res=>setPosts(res.data)).catch(err=>console.log(err));
     axios.get('http://localhost:3000/api/Session').then(res=>setUsername(res.data)).catch(err=>console.log(err));
    
  },[])

  function hendelDelete(id) {
    console.log("delete");
    axios.delete('http://localhost:3000/api/posts/' + id)
      .then((res) => { window.location.reload()})
      .catch((err) => console.log(err));
  }


return (
  <div className='Home'>
    <h1>Liste d'articles</h1>
    {
      Posts.map((data)=>(
       <ul key = {data._id}>
        <li>
          <p>{data.titre}</p>
          
          <Link className="link-page" to ={`/view-post/${data._id}`}>Lire</Link>
          
          <Link className="link-page" to ={`/update-post/${data._id}`}>Éditer</Link>
          <button className="link-page" onClick={(e)=> hendelDelete(data._id)} >Supprimer</button>
        </li>
    </ul>
      ))
    }
   
  </div>
);
}

export default Home;

























