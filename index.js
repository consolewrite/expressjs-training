var express = require('express');
var app = express();

app.set('env','development');
console.log(process.env.NODE_ENV);

