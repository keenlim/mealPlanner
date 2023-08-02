const express = require('express');
const app = express();
const bodyParser = require("body-parser");

//body parser middleware setup
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//app.use(express.json());
//Import mealGenerator function
const {mealGenerator} = require('./routes/mealGenerator');
const port = 3000;

app.get('/',(req,res) => {
  res.send("Hello World");
})

app.get('/generateMeal', (req, res) => {
  let array = mealGenerator();
  res.json(array);
});


// Server Setup - Seeting REST API Server to Port 8080
app.listen(3000,'0.0.0.0', () => {
  console.log('Server started at PORT 3000');
})