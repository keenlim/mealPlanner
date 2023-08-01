const allmeals = require('../Data/allMeals');

//This function will need to create an array of size 5 appending data from the allMeals data
//Randomly generate numbers between 0 and 999
//This will help to "get" data from the allMeals json object
const randomGenerator = () => {

    for(let i = 0; i < 5; i++){
        //Get a random number from 0 to 100
        let x = Math.random() * 100;
    }
    
    return 1;

}

module.export = { randomGenerator };