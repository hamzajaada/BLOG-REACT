const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const cookieParser = require('cookie-parser');
const cors = require("cors");
const url = "mongodb://127.0.0.1:27017/DSREACT";
const app = express();
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret : "HAMZA",
    resave : false ,
    saveUninitialized :false,
}))
app.use(cors());
app.use(express.json());

const apiRouter = require("./routes/ApiRoute");
mongoose
  .connect(url)
  .then(() => {
    console.log("connecting to MONGODB");
  })
  .catch((err) => {
    console.log(err);
  });
app.use("/api", apiRouter);

app.listen(3000, () => {
  console.log("Running!!");
});