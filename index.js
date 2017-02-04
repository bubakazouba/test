var express = require('express')
var app = express();

app.get('/admin', function(req, res) {
    
    res.send("<html><title>hi</</html>");

});

PORT = 8000;
var server = app.listen(PORT, function () {
  var port = server.address().port;

  console.log('Magic happens at ' + port);
});
