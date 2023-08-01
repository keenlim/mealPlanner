const allmeals = require('../Data/allMeals');
const mealGenerator = () => {
    let generatedArray = [];

    for(let i = 0; i<5; i++){
        let x = Math.floor(Math.random() * 1000);
        //console.log(x);
        let generatedInput = allmeals[x];
        generatedArray.push(generatedInput);
    }
    
    console.log(generatedArray);

    return generatedArray;
}

module.exports = { mealGenerator };