console.log('Hello World');

var http = require ("http");

http.createServer(function(req, res)); {
    res.writeHead("200, {'Content-Type': 'text/html'})
    res.write('Hello World')
}).listen(3000);
