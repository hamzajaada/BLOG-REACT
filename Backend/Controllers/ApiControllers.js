const Post = require("../model/Post");
const jwt = require("jsonwebtoken");
const GetRoutes= (req,res)=>{
    const routes = [
            "/api",
            "/api/posts",
            "/api/post/:id",
            "/api/posts",
            "/api/posts",
            "/api/posts/:id",
            "/login"
    ]
    res.json(routes);
}
const GetPosts = async (req,res) =>{
    try{
        console.log("entre dans la fonction show");
         const posts = await Post.find();
         res.json(posts);
    } catch(err){ console.log("erreur lors de get post"+err);};
   
}
const GetPostwID = async (req,res)=>{
   try{
        const postid = req.params.id;
        console.log(postid);
        //le problemme ici dans la fonction :
         Post.findById(postid).then((result)=>{
            res.json(result);
          console.log(result);
         })
        
    } catch(err){
         console.log("erreur lors de recherche par id "+err);
 }
}
const addPost = async(req,res)=>{
    try{
        console.log(req.body);
        const posts = new Post(req.body);
        posts.save();
        console.log("created " + posts);
        res.json(posts);
    } catch(err){
        console.log("erreur lors de creation de post"+err);
    }
}

const ModifierPost = async(req,res)=>{
    try{
        await Post.findByIdAndUpdate(req.params.id,req.body).then((result)=>{
        res.json(result);
        })
    }catch(err){
        console.log("erreur lor de Update"+err);
    }
}
const DeletePost = async (req,res)=>{
    try{
       await Post.findByIdAndDelete(req.params.id).then((result)=>{
         res.json(result);
       })
    }catch(err){
        console.log("erreur lors de suppression du post"+err);
    }
}
const Login = async(req,res)=>{
    try{
        // console.log(req.body);
        const user = req.body.username;
        const password = req.body.password;

        if(user =="admin" && password =="123"){
            const jsenwebtkn = jwt.sign({user:user,password:password},"hamzajaada");
            res.json(jsenwebtkn);
            // console.log(jsenwebtkn);
        }
        else{ 
            console.log("erreur de l'authentification");
        }
    }catch(err){
        console.log("erreur lors de login");
    }

}
module.exports={GetRoutes,GetPosts,GetPostwID,addPost,ModifierPost,DeletePost,Login};