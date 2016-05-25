var fs = require('fs');
var url = require('url');
var http = require('http');
var path = require('path');
var express = require('express');
var app = express();
var server = http.createServer(app);
var io = require('socket.io').listen(server);
var root = __dirname;
app.use(function (req, res, next) {
req.on('static', function () {
var file = url.parse(req.url).pathname;
var mode = 'stylesheet';
if (file[file.length - 1] == '/') {
file += 'index.html';
mode = 'reload';
}

