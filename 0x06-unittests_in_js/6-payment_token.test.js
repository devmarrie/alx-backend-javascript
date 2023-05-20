const { error } = require('console');
const getPaymentTokenFromAPI = require('./6-payment_token')
const assert = require('assert')

describe ('getPaymentTokenFromAPI', function() {
  it('should test the promise', function(){
    getPaymentTokenFromAPI(true)
      .then((data) => {
        assert.deepStrictEqual(data, { data: 'Successful response from the API' });
        done();
      })
      .catch((error) => {
        done(error);
      });
  });
});