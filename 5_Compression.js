var compression = require('compression');
var express = require('express');


var app = express();

app.use(compression({threshold: 1}));

app.get('/events', function (req, res) {
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
 
  // send a ping approx every 2 seconds 
  var timer = setInterval(function () {
    res.write('data: ping\n\n')
 
    // !!! this is the important part 
    res.flush()
  }, 2000)
 
  res.on('close', function () {
    clearInterval(timer)
  })
})