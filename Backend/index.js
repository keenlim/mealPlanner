const express = require('express');
const app = express();
app.use(express.json());
//Import mealGenerator function
const {mealGenerator} = require('./routes/mealGenerator');
const port = 3000;

app.get('/',(req,res) => {
  res.send("Hello World");
})

app.get('/generateMeal', (req, res) => {
  let array = mealGenerator();
  res.send(array);
});


// Server Setup - Seeting REST API Server to Port 8080
app.listen(3000,'0.0.0.0', () => {
  console.log('Server started at PORT 3000');
})