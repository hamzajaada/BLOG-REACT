const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const cookieParser = require('cookie-parser');
// const url = "mongodb://localhost:27017/DSREACT"
const url = "mongodb://127.0.0.1:27017/DSREACT";
const session = require("express-session");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
  })
);
app.use(cors());
app.use(express.json());
app.use(cookieParser());
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