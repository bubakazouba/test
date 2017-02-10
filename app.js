var express = require('express')
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(require('./routes/admin'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: false }));

var mongodb = require('./modules/db');
mongodb.connect("mongodb://stockmanagement:1234567890aA@ds139909.mlab.com:39909/chefoncall", function () {
    console.log('Connected to MongoDB.');
});

// Basic 404 handler
app.use(function (req, res) {
  res.status(404).send('404 Not Found');
});

PORT = 8000;
var server = app.listen(PORT, function () {
  var port = server.address().port;

  console.log('Magic happens at ' + port);
});
