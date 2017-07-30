var express = require('express');
var app = express();
var fs = require('fs');


app.get('/', function (req, res) {
  console.log('ther');
  fs.readFile('client/index.html', function startServer(err, html) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  });
});

app.use('/client', express.static(__dirname + '/client'));

app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});