const request = require('request');
const { expect } = require('chai');

describe('Testing express home route', function() {
    const url = 'http://localhost:7865/';
    it('should have correct status code 200', function(done) {
      request(url, (err, res, body) => {
        if (err) throw err;
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it('should have correct results', function(done) {
      request(url, (err, res, body) => {
        if (err) throw err;
        expect(body).to.contain('Welcome to the payment system')
        done();
        });
    });

    it("check correct content length", function(done) {
        request(url, function(err, res, body) {
            expect(res.headers['content-length']).to.equal('29');
            done();
        });
    });
});

describe('Adding a new test suite for the cart page', function() {
  it('should check the status code when id is a number', function(done) {
    const url = 'http://localhost:7865/cart/123';
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(200);
      done()
    });
  });

  it("should have correct results when id is called", function (done) {
    const url = "http://localhost:7865/cart/123";
    request(url, (err, res, body) => {
      if (err) throw err;
      expect(body).to.contain("Payment methods for cart 123");
      done();
    });
  });

  it('should check status code when not number', function(done) {
    const url = 'http://localhost:7865/cart/qwerty';
    request(url, (err, res, body) => {
      expect(res.statusCode).to.equal(404);
      done()
    });
  });
});

describe('Test suite for the log in endpoint', function() {
  it('should test successfull logging in of user', function(done) {
    const options = {
      method : 'POST',
      url: 'http://localhost:7865/login',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ userName: 'marrie' })
    };
    // Make the request to the server
    request(options, function(error, response, body) {
      expect(response.statusCode).to.equal(200);
      expect(body).to.equal('Welcome marrie');
      done();
    });
  });
});

describe('Test suite for available payment', function() {
  it('should return the available payment methods', function(done) {
    const option = {json: true}
      const obj = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
    request('http://localhost:7865/available_payments',option, (error, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.deep.equal(obj);
      done();
    });
  });
});