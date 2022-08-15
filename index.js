var express = require('express');
var app = express();
// test 2 test 3 verzija git commit SVE UKUPNO
// opet i opet i nista test dmdkdkkd test
// nedjelja opet i opet i opet

app.get('/', function (req, res) {


  res.send('Hello Worl 70 !!!!');


});
//NOVI POKUSAJ
var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});
