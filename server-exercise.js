var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res) {
    if (req.url === '/' && req.method === 'GET') {
        res.end('Welcome home!');
    } else if (req.url === '/api/hobbits' && req.method === 'GET') {
        res.end('Frodo, Samwise, Peregrin')
    }
    else {
        res.end('404 hobbit not found');
    }
});

server.listen(3000);