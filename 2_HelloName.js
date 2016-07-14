var express = require('express');
var app = express();
var port = 3000;



app.get('/name/:user_name',function (req,res) {
    
    res.status(200);
    res.set('Content-Type','text/html');
    res.send('<html><body><h1>Hello World</h1><p>' + req.params.user_name + '</p></body></html>')
    
    res.end('Hello World');
})

app.listen(port,function () {
    console.log("The server is running. Open your browser at http://localhost:%s",port);
})