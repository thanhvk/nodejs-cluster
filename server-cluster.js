var http = require('http');
var app = require('express')();
var cluster = require('cluster');
var os = require('os');
var server = http.createServer(app);

if (cluster.isMaster) {
	os.cpus().forEach(() => {
		cluster.fork();
	});

	cluster.on('exit', (worker, code, signal) => {
		cluster.fork();
	});
} else {
	var worked_id = 'Worked_' + cluster.worker.id;
	app.get('/', (req, res) => {
		var a = [];
		for (var i = 0; i < 100000; i++) { a.push(i); }
			res.send(a.toString());
	});

	server.listen(3000, () => {
		console.log('Server listening at port 3000 by %s', worked_id);
	})
}
