var assert = require('assert');
const {mealGenerator} = require('../routes/mealGenerator');

describe('test', () => {
    it('returns true when type is array', () => {
        //Setup
        const expected = "object";

        //Exercise 
        const actual = typeof mealGenerator();

        //Verify
        assert.equal(expected, actual);
    });

    it('returns true when the array length is 5', () => {
        //Setup
        const expected = 5;

        //Exercise
        const actual = mealGenerator().length

        //Verify
        assert.equal(expected,actual);
    });
})