const request = require('./node_modules/request');
const fetchMyIP = function(callback) {
  request('https://api.ipify.org?format=json', (error, response, body) => {

  });

module.exports = { fetchMyIP }