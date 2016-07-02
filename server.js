var http = require('http');
var app = require('express')();
var server = http.createServer(app);

app.get('/', (req, res) => {
	var a = [];
	for (var i = 0; i < 100000; i++) { a.push(i); }
	res.send(a.toString());
});

server.listen(3000, () => {
	console.log('Server listening at port 3000');
})