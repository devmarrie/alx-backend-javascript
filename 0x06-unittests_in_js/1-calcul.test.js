const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Adding more complexity to it', function() {
    it('should calculate the sum as required', function() {
        assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    })

    it('should calculate the subtract as required', function() {
        assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    })

    it('should calculate the sum as required', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    })

    it('should calculate the divide by zero', function() {
        assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    })
})