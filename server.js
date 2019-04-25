var express = require('express');
var app = express();

app.use(express.static(__dirname + "/public"));

var server = app.listen(8000);
var io = require('socket.io')(server);

io.on('connection', function (socket) {
    console.log("New User ID: " + socket.id);

    socket.on("mouse", function(data){
        socket.broadcast.emit("mouse", data);
        console.log(data);
    });

});