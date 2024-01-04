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
const GetPosts = async (req, res) => {
    try {
        const username =req.session.username // Assurez-vous que username est défini ici
        const posts = await Post.find();
        res.json({ posts, username: username });
    } catch (err) {
        console.log("Erreur lors de la récupération des articles : " + err);
        res.status(500).json({ error: "Erreur serveur" });
    }
};

const GetSession = async (req, res) => {
    if (req.session.username) {
        const session = req.session.username;
        console.log("get session"+session);
        res.json(session);
    }
    else{
        console.log("aucun session creeer");
        res.json("hh");
    }  
};
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
        console.log("entre de modifer");
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
        const userSession = req.session.username;
        const passSession = req.session.password;
        const jsenwebtkn = jwt.sign({ user: userSession, password: passSession }, "hamzajaada");
        res.json({ jsenwebtkn, userSession });
    } catch (err) {
        console.log("Erreur lors de la génération du token");
        res.status(500).json({ error: "Erreur serveur" });
    }
};
module.exports={GetRoutes,GetPosts,GetPostwID,addPost,ModifierPost,DeletePost,Login,GetSession};