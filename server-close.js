var http = require('http');
var app = require('express')();
var server = http.createServer(app);

var closed = false;

app.get('/', (req, res) => {
	if (!closed) {
		server.close();

		res.send('First request');

		closed = true;
	} else {
		res.send('Server shutting down ...');
	}

	setTimeout(() => {
		process.exit();
	}, 5000);
});	

server.listen(3000, () => {
	console.log('Server listening at port 3000');
});