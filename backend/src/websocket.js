const socketio = require('socket.io');

const connections = [];

exports.setupWebsocket = (server) => {
    const io = socketio(server);
    console.log('OK ')
    io.on('connection', socket => {
        console.log(socket.id);
        console.log(socket.handshake.query)
        
    });
};