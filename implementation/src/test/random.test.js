var assert = require('assert');
const randomGenerator = require('../Functions/randomGenerator');

describe('Generator', () => {
    describe('.setup', () => {
        it('returns true when a is equals to 3', () => {
            //Setup
            const expected = 3;
            
            //Exercise
            const actual = randomGenerator();
    
            //Verify
            assert.equal(expected,actual);
        });
    });
});