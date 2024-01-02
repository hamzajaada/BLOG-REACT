const express = require("express");
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/DSREACT"
const app = express();
const apiRouter = require("./routes/ApiRoute")
// const webRouter = require("./routes/WebRoutes")
// app.use(express.static('public'))

// app.set("view engine", "pug");
// app.set("views", "./views");
// var methodOverride = require('method-override')
// app.use(methodOverride('_method'))
// // app.use(express.urlencoded({extended:true}));
mongoose.connect(url).then(()=>{
    console.log("connecting to MONGODB");
}).catch((err)=>{console.log(err);})
app.use("/api",apiRouter);

app.listen(3000,()=>{
    console.log("Running!!");
})