var Fetch = require('whatwg-fetch');
var rootUrl = 'http://api.openweathermap.org/data/2.5/forecast?q=';
var apiUrl = '&APPID=104d7757fb02f20ec679bf6c2e7aece2';

module.exports = {
    get: function(place) {
        return fetch(rootUrl + place + apiUrl, {
            headers: {
                // No need for special headers
            }
        })
        .then(function(response) {
            return response.json();
        });
    }
};