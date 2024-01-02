const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');
// const url = "mongodb://localhost:27017/DSREACT"
const url = "mongodb://127.0.0.1:27017/DSREACT"
const session = require("express-session")
const app = express();
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use(express.json());
const apiRouter = require("./routes/ApiRoute")
app.use(
    session({
        secret : "Secret",
        resave : false,
        saveUninitialized :true,
    })
);
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