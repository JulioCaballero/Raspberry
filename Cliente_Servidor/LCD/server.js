'use strict'

var app = require('express')(),
	http = require('http').createServer(app),
	io = require('socket.io')(http)
    
io.on('escribir', function (data){
    console.log(data)
})