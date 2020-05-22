const express = require("express");
const cors = require('cors')
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')

const app = express();
// const { resolve } = require('path');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json())
app.use(cors()) 
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


const { resolve } = require("path");
 
// Replace if using a different env file or config
const env = require("dotenv").config({ path: "./.env" });

console.log(process.env.SECRET_OR_KEY) 

app.post('/login', async (req, res)=>{ 
  
  if (!req.body.userName || !req.body.password) {
    return res.status(401).send('no fields');
  }
  
  if(userName===process.env.userName && password===process.env.password){
    // const token = jwt.sign({userName}, process.env.SECRET_OR_KEY);
    // res.json({
    //   token: token
    // });
    result.authenticate(req.body.password).then(user => {
      const payload = { id: process.env.id };
      const token = jwt.sign(payload, process.env.SECRET_OR_KEY);
      res.send(token);
    }).catch(err => {
      return res.status(401).send({ err });
    });
  } 
})


const PORT = process.env.PORT || 5000;
console.log("NODE JS Running on ",PORT)
app.listen(PORT);