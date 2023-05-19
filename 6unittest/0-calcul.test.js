const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test suite calculating the number', () => {
  it('given 1,3 will return 4', () => {
     assert.equal(calculateNumber(1, 3), 4);
    });
});