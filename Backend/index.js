const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//body parser middleware setup
//app.use(bodyParser.urlencoded({extended:false}));
//app.use(bodyParser.json());
//app.use(express.json());

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
//Import mealGenerator function
const {mealGenerator} = require('./routes/mealGenerator');

app.get('/',(req,res) => {
  res.send("Hello World");
})

app.get('/generateMeal', (req, res) => {
  let array = mealGenerator();
  res.send(array);
});


// Server Setup - Seeting REST API Server to Port 8080
app.listen(5000,'0.0.0.0', () => {
  console.log('Server started at PORT 5000');
})