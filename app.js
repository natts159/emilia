const express = require("express");
const app = express();
const path = require("path");
const port = 3030;

app.use(express.static("public"))

app.get("/home", (req, res)=> res.sendFile(path.join(__dirname, "views","home.html")))
app.get("/about", (req, res)=> res.sendFile(path.join(__dirname, "views",)))
app.get("/music", (req, res)=> res.sendFile(path.join(__dirname, "views",)))
app.get("/contact", (req, res)=> res.sendFile(path.join(__dirname, "views",)));

app.listen(port, ()=>console.log("servidor en el puerto" + port))