var express = require('express');
var path = require('path');
var app = express();

var book = { name: 'Practical Node.js', publisher: 'Apress', keywords: 'node.js express.js', discount: 'PNJS15' }

app.set('view cache', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('port', process.env.PORT || 3000);

app.set('jsonp callback name', 'cb');
app.set('json replacer', function (key, value) {
    if (key === 'discount')
        return undefined;
    else
        return value;
});
app.set('json spaces', 4);
app.set('x-powered-by', false);
app.set('subdomain offset', 3);
// app.disable('etag')

app.get('/jsonp', function (request, response) {
    response.jsonp(book);
})
app.get('/json', function (request, response) {
    response.send(book);
})

app.get('*', function (request, response) {
    response.send('Pro Express.js Configurations ok.');
})

if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}
var server = app.listen(app.get('port'), function () {
    console.log('Express server listening on port ' + server.address().port);
});