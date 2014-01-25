var express = require('express');
var http = require('http');
var path = require('path');
var fs = require('fs');
var json = require('./package.json');
var middleware = require(__dirname + '/lib/middleware');

var contents = fs.readFileSync(path.join(__dirname, 'space1.txt'), 'utf-8');

var app = express();

app.set('port', process.env.PORT || 80);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(middleware.log);
app.use(app.router);
express.errorHandler();

app.get('/', function (req, res) {
  res.render('index', {
    title: json.name,
    store: {
      data1: fs.readFileSync(path.join(__dirname, 'space1.txt'), 'utf-8'),
      data2: fs.readFileSync(path.join(__dirname, 'space2.txt'), 'utf-8')
    }
  });
});

http.createServer(app).listen(app.get('port'), function () {
  console.log('web server running on port ' + app.get('port'));
});