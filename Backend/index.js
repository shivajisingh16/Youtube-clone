const express = require("express");
const app = express();
const bodyParser= require('body-parser')
const cors = require('cors');
const AuthRouter = require('./routes/AuthRouter')
require('dotenv').config()
require('./db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(bodyParser.json())


app.use('/auth',AuthRouter)


let port = process.env.PORT || 3000;
app.listen(port , () => {
  console.log(`listening at localhost:${port}`);
});

