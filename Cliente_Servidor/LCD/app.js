'use strict'

var app = require('express')(),
	http = require('http').createServer(app),
	io = require('socket.io')(http),
	port = process.env.PORT || 3000,
	
	

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
	})	
})