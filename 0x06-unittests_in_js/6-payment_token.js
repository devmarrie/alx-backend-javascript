function getPaymentTokenFromAPI(success) {
  if (success) {
    return new Promise(function (resolve) {
        const data = {data: 'Successful response from the API' };
        resolve(data);
    });
  }
  return 
}

module.exports = getPaymentTokenFromAPI;
