var http = require('http');
var fs = require('fs');

var srv = http.createServer(function(req, res){
	
	fs.readFile('index.html',function(err, data){
		if (err) {
			console.log(err);
		} 
		else {
			res.writeHead(200,{'Content-type':'text/html'});
			res.end(data);
		}

	});

});

srv.listen(1337,'127.0.0.1');

console.log('Web server started');
 