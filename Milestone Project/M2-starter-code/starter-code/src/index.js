const path = require("path");
const http = require("http");
const handler = require(path.join(__dirname, 'handler'));
const server = http.createServer(handler);

const { Server } = require('socket.io');

const io = new Server(server);

io.on('connection', (socket) => {
    console.log(`New Client: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} has disconnected.`)
    });
    socket.on('newImage', (username) => {
        console.log(username);
    });
});


const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running at  ${PORT}`));
