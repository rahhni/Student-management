var http = require('http');  //to import modules

var server = http.createServer(function onRequest(request,response){
    response.writeHead(200,{ 'Content-Type':'text/plain'});
    response.write('This is a simple HTTP server');
    response.end();

}).listen(3000);

//in this server there will be no message displayed in the terminal
