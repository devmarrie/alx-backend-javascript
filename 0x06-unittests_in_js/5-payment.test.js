const sendPaymentRequestToApi = require('./5-payment')
const sinon = require('sinon')

describe('Hooks', function() {
  let consoleSpy; 
  beforeEach('Read the console log before test', function() {
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach('clear console', function() {
    consoleSpy.restore();
  });

  it('should return a total of 120', function() {
    sendPaymentRequestToApi(100, 20);
    sinon.assert.calledWith(consoleSpy, 'The total is:120');
    sinon.assert.calledOnce(consoleSpy);
  })

  it('should return a total of 20', function() {
    sendPaymentRequestToApi(10, 10);
    sinon.assert.calledWith(consoleSpy, 'The total is:20');
    sinon.assert.calledOnce(consoleSpy);
  })

})
