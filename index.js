var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);




app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


//Example with user Connected / Disconnected
io.on('connection', function(socket){
    //    socket.emit("message", "Welcome to cockpit chat! Skr-skr");
    console.log('a user connected');



    socket.on("chat message", function(msg){
        console.log("message:" + msg);
        io.emit('chat message', msg);
//        socket.broadcast.emit("message", message);
    });


    socket.on('disconnect', function(){
        if (err) return new Erorr(err);
        console.log('user disconnected');
    });

});



http.listen(3000, function(){
    console.log('listening for cocks on *:3000');
});

