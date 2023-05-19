const assert = require('assert');
const { expect } = require('chai')
const calculateNumber = require('./1-calcul');

describe('Using expect from chai', function() {
    it('should calculate the sum as required', function() {
        expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    })

    it('should calculate the subtract as required', function() {
        expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal (-4);
    })

    it('should calculate the sum as required', function() {
        expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal (0.2);
    })

    it('should calculate the divide by zero', function() {
        expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal ('Error');
    })
})