const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const pay = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${pay}`);
}

module.exports = sendPaymentRequestToApi;