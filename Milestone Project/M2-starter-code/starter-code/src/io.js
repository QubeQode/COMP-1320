const { Server } = require('socket.io');

let instance;

getInstance = (server = null) => {
    if (server && !instance) {
        instance = new Server(server);
    }
    return instance;
}

module.exports = getInstance;
