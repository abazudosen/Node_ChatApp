var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'jen@test.com',
    //     text: ' this is you!'
    // });

    socket.emit('createMessage', {
        from: 'Abaz',
        text: 'this is from me'
    });
});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

// socket.on('newEmail', function(email) {
//     console.log('new email', email);
// });

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
});