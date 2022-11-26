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
 * Notes on Singleton Objects:
 *
 * Singleton object acts as buffer between instance of socket server and other code. As a
 * private variable it exists outside of the scope of the http server instance and the feature 
 * logic.
 * 
 * However using exports I can still refer to its contents. This allows me to access socket.io's
 * functionality outside of the page initializing the http server, without creating a circular logic
 * error in the require statements.
 * 
 */

module.exports = getInstance;
