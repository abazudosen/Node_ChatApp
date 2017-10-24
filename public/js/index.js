var socket = io();

socket.on('connect', function() {
    console.log('connected to server');

    // socket.emit('createEmail', {
    //     to: 'jen@test.com',
    //     text: ' this is you!'
    // });

});

socket.on('disconnect', function() {
    console.log('disconnected from server');
});

// socket.on('newEmail', function(email) {
//     console.log('new email', email);
// });

socket.on('newMessage', function(message) {
    console.log('newMessage', message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    jQuery('#messages').append(li);
});

// socket.emit('createMessage', {
//     from: 'tony ab',
//     text: 'hi there!'
// }, function(data) {
//     console.log('we got it!', data);
// });

jQuery('#message-form').on('submit', function(e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: jQuery('[name=message]').val()
    }, function(){

    });
});