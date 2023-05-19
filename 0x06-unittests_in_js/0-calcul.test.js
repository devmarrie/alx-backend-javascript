const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('test suite calculating the number', function() {
  it('checks if rounded', function() {
    assert.equal(calculateNumber(1, 3), 4);
    });
  it('checks if rounded one with decimal', function() {
    assert.equal(calculateNumber(1, 3.7), 5);
  });
  it('checks if rounded both with decimal', function() {
    assert.equal(calculateNumber(1.2, 3.7), 5);
  });
  it('checks if rounded both with decimal greater than 5', function() {
    assert.equal(calculateNumber(1.5, 3.7), 6);
  });
});