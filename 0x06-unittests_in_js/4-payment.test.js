const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment')

describe('sendPaymentRequestToApi', function() {
  it('should validate usage of stub', function() {
    const stubSinon = sinon.stub(Utils, 'calculateNumber').returns(10);
    const consolelogSpy = sinon.spy(console, 'log');
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(stubSinon, 'SUM', 100, 20);
    sinon.assert.calledWith(consolelogSpy, 'The total is:10');
    stubSinon.restore();
    consolelogSpy.restore()
  });
});