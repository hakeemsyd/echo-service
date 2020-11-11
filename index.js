var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.text({
  type: function(req) {
    return 'text';
  }
}));

app.get('/*', function (req, res) {
  console.log('Request: ' + JSON.stringify(req.body));
  res = res.status(200);
  if (req.get('Content-Type')) {
    console.log("Content-Type: " + req.get('Content-Type'));
    res = res.type(req.get('Content-Type'));
  }
  res.send('Pong!!\n');
});

http.createServer(app).listen(7000);