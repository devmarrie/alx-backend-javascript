const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment')

describe('sendPaymentRequestToApi', function() {
  it('should validate usage of util', function() {
    const watch = sinon.spy(Utils, 'calculateNumber');
    sendPaymentRequestToApi(100, 20)
    sinon.assert.calledWith(watch, 'SUM', 100, 20);
    watch.restore();
  });
});