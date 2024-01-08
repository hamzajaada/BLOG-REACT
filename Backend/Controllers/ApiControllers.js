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
// function app(req,res){}
const GetPosts = async (req, res) => {
    try {
        // POST.FIND() all data
        const posts = await Post.find();
        res.json(posts);
    } catch (err) {
        console.log("Erreur lors de la récupération des articles : " + err);
        res.status(500).json({ error: "Erreur serveur" });
    }
};

const GetPostwID = async (req,res)=>{
   try{
        const postid = req.params.id;
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
        const posts =  await new Post(req.body);
        posts.save();
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
const Login = (req, res) => {
    try {
        const user = req.body.username;
        const password = req.body.password;
        // token : badge offre par le broser ;
        const jsenwebtkn = jwt.sign({ user:user, password:password }, "hamzajaada");
        res.json({ jsenwebtkn, user }); 
    } catch (err) {
        console.log("Erreur lors de la génération du token");
        res.status(500).json({ error: "Erreur serveur" });
    }
};
module.exports={GetRoutes,GetPosts,GetPostwID,addPost,ModifierPost,DeletePost,Login};