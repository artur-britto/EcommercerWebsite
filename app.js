const express = require("express");
const bodyParser = require("body-parser");
const ejs =  require ("ejs");
const mongoose = require ("mongoose");
const seesion = require ("express-session");
const port = 3000;
const path = require("path");
const app = express();
app.get("/", function(req,res){
    res.render("home");
})
app.use(express.static(path.join(__dirname, 'public')));
app.set("view engine", 'ejs');
app.listen(3000, () => {
    console.log('Server listening on port 3000');
  });