var express = require('express');
var file = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var content = file.readFileSync("index.html");
  response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
