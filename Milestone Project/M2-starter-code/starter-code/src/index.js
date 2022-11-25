const path = require("path");
const http = require("http");
const handler = require(path.join(__dirname, 'handler'));
const { updateFeed } = require(path.join(__dirname, 'logic', 'manipulateDatabase'));
const getIoInstance = require(path.join(__dirname, 'io'));

const server = http.createServer(handler);
const io = getIoInstance(server);

io.on('connection', (socket) => {
    console.log(`New Socket: ${socket.id}`);
    socket.on('disconnect', () => {
        console.log(`${socket.id} has disconnected.`)
    });
    socket.on('newImage', (inputID) => {
        console.log(`Image upload by ${socket.id}:${inputID}`);
        var imagePath = updateFeed(inputID);
        console.log(imagePath);
        io.emit('newImage', inputID);
    });
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`server is running at  ${PORT}`));
