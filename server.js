var express = require('express');
var app = express();
var fs = require('fs');

// var html = fs.readFile('index.html', function startServer(err, html) {
//   var server = http.createServer(function(req, res) {
//     console.log('req', req);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.write(html);
//     res.end();
//   });

//   server.listen(3000);
// });
app.use(express.static('client'));

app.get('/', function (req, res) {
  fs.readFile('index.html', function startServer(err, html) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write(html);
    res.end();
  });
});

app.listen(80, function () {
  console.log('Example app listening on port 3000!');
});