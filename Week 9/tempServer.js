const { createServer } = require('http');
const { createReadStream } = require('fs');
const qs = require('querystring');
const { fahrenheitToCelsius, celsiusToFahrenheit } = require('./tempConversions.js');

const server = createServer((request, response) => {
    if (request.method === 'GET') {
        response.writeHead(200, { 'Content-Type': 'text/html' });
        createReadStream('temp.html', 'utf-8').pipe(response);
    } else if (request.method === 'POST') {
        let recievedInput = '';
        request.on('data', function(chunk) {
            recievedInput += chunk;
            console.log(recievedInput);
        });
        request.on('end', function() {
            const postData = qs.parse(recievedInput);
            console.log(postData);
            if (postData.conversion === 'fahrenheit') {
                let convertedValue = fahrenheitToCelsius(Number(postData.fahrenheit));
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(`<p> ${convertedValue} </p>`);
            } else if (postData.conversion === 'celsius') {
                let convertedValue = celsiusToFahrenheit(Number(postData.celsius));
                response.writeHead(200, { 'Content-Type': 'text/html' });
                response.end(`<p> ${convertedValue} </p>`);
            }
        })
    }
});

server.listen(2227, () => {
    console.log('The server is now running.');
});
