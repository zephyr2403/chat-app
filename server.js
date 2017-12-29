var express = require('express');
var app = express();
var moment = require('moment')
var connections = [];
var users = [];

app.use(express.static('./public'));
var server = app.listen(3000);
io = require('socket.io').listen(server);


io.sockets.on('connection',function(socket){
  connections.push(socket);
  socket.once('disconnect',function(){
    for(var i=0;i<users.length;i++ ){
      if(users[i].id == this.id){
        users.splice(i,1);
      }
    }
    connections.splice(connections.indexOf(socket),1);
    socket.disconnect();
    console.log(connections.length)
    io.emit('disconnect',users);
  })
  console.log('Connected: %s Sockets Connected',connections.length)

  socket.on('messageAdded',function(payload){
    console.log(payload)

     newMessage={
      timeStamp:moment(payload.timeStamp).format('HH:mm:ss'),
      text:payload.text,
      user:payload.user
    }
    io.emit('messageAdded',newMessage)
  });
    socket.on('userJoined',function(payload){
      console.log(payload)

       newUser={
        id:this.id,
        name:payload.name
      }
      console.log(payload.name)
      users.push(newUser)
    io.emit('userJoined',users)
  });//messageAdded

});

console.log('Server Is Running On Port 3000')
