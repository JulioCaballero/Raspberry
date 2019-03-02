'use strict'

var app = require('express')(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	// five = require("johnny-five"),
    // Raspi = require("raspi-io"),
    // board = new five.Board({
    //     io: new Raspi()
    // })
	

    HOST = '127.0.0.1',
	publicDir = `${__dirname}/`


http.listen(port, HOST, () => {
	console.log('Iniciando Express y Socket.IO en localhost:%d', port)
})

app
	.get('/', (req, res) => {
		res.sendFile(`${publicDir}index.html`)
	})

io.on('connection', (socket) => {
	socket.on('mensaje', (data) => {
        console.log(data)
        // var lcd = new five.LCD({
        //     controller: "JHD1313M1"
        //   });
        
        //   lcd.useChar("heart");
        
        //   lcd.cursor(0, 0).print("hello :heart:");
        
        //   lcd.blink();
        
        //   lcd.cursor(1, 0).print("Blinking? ");
	})	
})