
var app = require('express')(); // import the express framework?
var http = require('http').Server(app); // set up some http stuff?
var io = require('socket.io')(http); // import socket.io library?

app.get('/', function(req, res){ // wut?
  res.sendfile('index.html'); // send the chat layout to the server?
});

io.on('connection', function(socket){
  console.log('a user connected'); // log new connection
  io.emit('chat message', 'a user connected'); // display new connection

  socket.on('disconnect', function(){ // on disconnect
  	console.log('user disconnected'); // log disconnect
  	io.emit('chat message', 'a user disconnected'); // display disconnect
	});

  socket.on('chat message', function(msg){ // on message sent
  	console.log('message: ' + msg); // log message
  	io.emit('chat message', msg); // display message
  	});

});




http.listen(3000, function(){ // post it up on 3000?
  console.log('listening on *:3000'); // log the initiation
});