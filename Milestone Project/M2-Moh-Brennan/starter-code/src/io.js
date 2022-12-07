const { Server } = require('socket.io');

let instance;

/**
 * Function produces singleton object containing the active instance of the socket server.
 * @param server Instance of http server to connect with socket server.
 *               Must be supplied to initialize the socket server.
 * @returns Singleton instance of socket.io server
 */

const getInstance = (server = null) => {
    if (server && !instance) {
        instance = new Server(server);
    }
    return instance;
}

/*
 * Notes:
 *
 * - Circular dependancy using initialized socket outside of index.js (source of init)
 * - Need to reference the init socket server outside of index.js
 * - Use singleton-like function to either init socket server or return initialized socket server
 * 
 */

module.exports = getInstance;
 