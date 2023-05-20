const request = require('request');
const { expect } = require('chai');

describe('Testing express', function() {
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
