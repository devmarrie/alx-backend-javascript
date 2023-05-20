const assert = require('assert');
const { expect } = require('chai')
const calculateNumber = require('./2-calcul_chai');

describe('SUM', function() {
    it('should calculate the sum as required', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
});

describe('SUBTRACT', function() {
    it('should calculate the subtract as required', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal (-4);
    });
});

describe('DIVIDE', function() {
    it('should calculate the divide as required', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal (0.2);
    });
});

describe('DIVIDE BY 0', function() {
    it('should calculate the divide by zero', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal ('Error');
    });
});

