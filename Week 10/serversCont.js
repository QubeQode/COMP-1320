/*
 * Server Review:
 *
 * Get Request:
 * When creating a link we just need the last part of the path. In other words the part of the url
 * we are actually asking the server to get when the link is interacted with. As long as we put a 
 * separator before it, it will append itself onto the existing URL.
 * 
 * req.url -> check the url requested in the GET command
 * - Can be used to verify the url being clicked and add conditional logic based on hyperlink
 * 
 * Post Request:
 * We must use name attribute on inputs so that post can obtain the relevant input
 * Uses streams so data must be aggregated from chunks 
 * - aggregate = ''
 * - aggregate += chunk
 * - req.on('end', func () {})
 * Last line ensures the logic doesn't progress till all chunks aggregated
 * 
 * Handling Info Transfer w Post:
 * 1. .pipe() readable stream to index file in server, with writeable stream going to site
 * 2. res.write - uses a buffer to transfer the info over without piping or requirement of a file
 *    res.end - calls the end of the transfer
 * Shortcut:
 * Use res.end(<content here>) to push it all at once
 * When working with streams there is an inbuilt end so we don't need res.end
 * 
 * qs.parse:
 * querystring parse - converts string into object with key:value relationship with retrieved info
 * 
 * createReadStream/createWriteStream are optional methods w/ server logic - used bc convenient
 * Alt Options:
 * 1. pipe to transform stream
 * 2. use async function to read/write
 * 
 * If working with small sized files async is fine. When streaming movie etc must be streams
 */

const http = require('http');
const fs = require('fs');
const qs = require('querystring');

/*
 * Async Solution to server reading file
 */

// fs.readFile('path', 'encoding', (err, data) => {
       // Internal Logic / Transformation of data
//     res.end(data);
// })

/*
 * MILESTONE 2: 
 * 
 * Project Outcomes:
 * - It is meant to be difficult, it is prep for industry level questions
 * - It's okay to struggle, it is meant to be overwhelming
 * 
 * Task 1: Create a Home Page
 * - Show all users who are using the photo app, should have 2 users
 * - Started code contains fake database w 2 users
 * - We should read user info from server database and display on the home page
 * - Username, PFP, ID ...
 * - Represented in a JSON object
 * 
 * - Two actions can be taken on the Home Page:
 * 1. Upload                - Opens file explorer to allow user to upload photo database updated 
 *                            with the uploaded photo
 *                          - Post request but the issue is we aren't sending character letters 
 *                            instead we are working with binary data
 *                          - Use 'formidable' library (for parsing form data esp file uploads)
 * 2. Click on user profile - shows you user's profile
 *                          - localhost:3000/feed to see sample profile to replicate
 *                          - Sample profile elements need to be replaced with actual info
 *                          - PFP, followers, photos etc must be displayed via database
 * 
 * Task 2: Refactor Code
 * - Need to be able to put logic into our HTML
 *      - But HTML doesn't have inbuilt logic
 * - So we use ejs
 *      - ejs = template language
 *      - write html in the ejs file
 *      - allows you to put js knowledge into your html file
 */

/*
 * Understanding Server Code:
 * 
 * index.js - this is the file to be run
 *  - creates a server
 *  - listens on a port
 *  - http.createServer(logic)
 * 
 * handler.js - this is where our server logic is contained
 *  - contains routes (URLs)
 *  - Anytime a page is added it must be added to allRoutes object
 *  - "/url:method<GET/POST>": (request, response) => {logic}
 *  - default route: set to 404
 *      - if there is no path to be displayed default to 404 - standard web structure
 * 
 * controller.js - holds the logic called on by each route
 * Each function has:
 *  - response.write followed by html being pushed to website
 *  - will need to change parts of the html to adapt to change in user/change in input like new img
 *  - response.end to signal end of the content being pushed
 */