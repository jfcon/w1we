var https = require('https');

// console.log('I did it!');

var options = {
    host: 'www.example.com',
    path: '/'
}

// called by https when the request is made
function callback(response){
    console.log('In response handler callback!');

    response.on('data', function(chunk){
        console.log('[-- CHUNK OF LENGTH ' + chunk.length + ' --');
        console.log(chunk.toString());
    });
}

console.log("I'm about to make the request!");

https.request(options, callback).end();

console.log("I've made the request!");