const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 4000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    // socket.emit('newEmail', {
    //     from: 'abaz@test.com',
    //     text: "hey, whats up?",
    //     creetedAt: 123
    // });

    socket.emit('newMessage', {
        from: 'tony',
        text: 'see u tmr',
        createdAt: 42
    });

    // socket.on('createEmail', (newEmail)=>{
    //     console.log('createEmail', newEmail);
    // });

    socket.on('createMessage', (message) => {
        console.log('createMessage', message);
    });

    socket.on('disconnect', ()=> {
        console.log('User was disconnected from server');
    });
});

server.listen(port, () => {
    console.log(`Server started at ${port}`);
})