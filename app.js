//jshint esversion:6
import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";

const app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

//TO-DO:

const PORT = process.env.PORT || 3000;

app.listen(PORT, function () {
  console.log("Port started on port " + PORT);
});
