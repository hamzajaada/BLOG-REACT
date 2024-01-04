const express = require("express");
const app = express();
const routerApi = express.Router();
const Authentification = require("../midllware/auth")
const ApiController = require("../Controllers/ApiControllers");
routerApi.get("/",ApiController.GetRoutes);
routerApi.get("/posts",ApiController.GetPosts);
routerApi.get("/posts/:id",ApiController.GetPostwID);
routerApi.post("/posts",ApiController.addPost);
routerApi.put("/posts/:id",ApiController.ModifierPost);
routerApi.delete("/posts/:id",ApiController.DeletePost);
routerApi.post("/login",Authentification.auth,ApiController.Login);

module.exports = routerApi;