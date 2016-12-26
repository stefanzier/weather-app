const request = require('request');

request({
  url: 'https://maps.googleapis.com/maps/api/geocode/json?address=1829+Los+Altos+Dr',
  json: true
}, (error, response, body) => {
  console.log(body);
});
