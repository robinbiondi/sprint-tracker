var express = require('express');
var app = express();
var fs = require('fs');
var PORTS = {
  development: 3000,
  production : 80,
};

var ENV = process.env.ENV;

if (!ENV)
  throw new Error('ENV not defined in environment variables');

var PORT = PORTS[ENV];


app.get('/', function get(req, res) {
  fs.readFile('client/index.html', function startServer(err, html) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  });
});

app.use('/', express.static(__dirname + '/client'));

app.listen(PORT, function serverStarded() {
  console.log('Example app listening on port ' + PORT);
});