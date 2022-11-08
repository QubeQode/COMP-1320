/*
 * LECTURE NOTES: Local Devices, Servers + Web Servers
 *
 * All computers have a domain name, although it is hard to read
 * 
 * We have a server running Linux from abroad
 * Can be remotely connected to and can install any software desired
 * 
 * Server is connected to local device via the internet:
 *  - Connecting via the internet doesn't refer to browsing the web
 *  - Refers to the idea of transferring info from local to server or server to local
 *
 * When connecting to the IP address of server information transfer is enabled
 *  - All devices connected to the internet have an IP address
 *  - Server IP enables a connection to the server from local device
 *  - However we need software that transfers information from server to local
 * 
 * We need a web Server:
 *  - Static Web Server
 *  - Application Server
 * 
 * Static Web Server:
 *  - Apache
 *  - Nginx
 *  - Local makes a request through the web server for a specific piece of info
 *  - Returned info is the same for every user
 * 
 * E.g. of Application Web Server:
 *  - Web Apps require differing content for every single user
 *      - Twitter would be different for different users
 *      - Need to facilitate these personal instances
 *  - Require a programming language to make Web App Server
 *      - Node.js - [can build without any further dependencies]
 *      - Python - Flask, Django [required installs]
 *      - Java - Tomcat [required installs]
 *  - This is because we need specialized logic depending on who is making the request
 *  - We can add logic because we are using App Server
 *      - By default App Server can do everything a Static Server can do
 * 
 * localhost: port
 *  - Type this into browser and it will find the space in the local system
 *  - Simulates server functionality within the local machine
 */

const { createServer } = require('http'); // Node module for web server functionality
const { createReadStream } = require('fs');
const qs = require('querystring');

/* 
 * Actions can be broken down into two phases of a cycle: Request and Response

 * Two Main categories in HTTP request
 * 1. GET - retrieve something from the server
 * 2. POST - push something to the server
 * 
 * Tech Convention: if a web address ends with .ca etc http assumes we are looking for html
 */

const server = createServer((request, response) => {
    if (request.method === 'GET') {
        // Step 1: Tell browser what type of data we are sending back to it
        // HTML? CSS? PLain Text? Audio file? Application?
        response.writeHead(200, { 'Content-Type': 'text/html' });
        // The usage of 200 tells browser everything went okay, it is a browser code like 404
        
        // Step 2: Send the data back to the browser by using a stream
        createReadStream('index.html', 'utf-8').pipe(response);
        // Piped to the response stream so that info is incrementally sent
    } else if (request.method === 'POST') {
        // Step 3: We must circumvent the fact that browser sends data in chunks via stream
        // request.on('data') -> event listener that is activated by presence of data being input
        let body = ''
        request.on('data', function(chunk) {
            body += chunk;
            // Initializing an empty string and letting the chunks collect into cohesive whole
        });
        request.on('end', function() {
            // Check the database to see if the user exists
            const postData = qs.parse(body);
            response.writeHead(200, { 'Content-Type': 'text/html' });
            response.end('<h1>Thanks for logging in, this page does nothing though.</h1>');
        });
    }
});

// Step 4: Set up a line of code that searches the local host for any updates
server.listen(2227, () => {
    console.log('The server is now running.');
});
