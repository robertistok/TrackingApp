var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var users = require('./routes/users');
var coords = require('./routes/coords');

var app = express();
var staticPath = 'public';


// view engine setup
app.engine('html', require('ejs').renderFile)
app.set('view engine', 'html');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Request-Headers", "*");
  res.header("Access-Control-Allow-Methods", 'GET, POST, PUT, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.header("Access-Control-Allow-Credentials", "true");
  next();
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());


app.use('/users', users);
app.use('/api', coords);
app.use(express.static(staticPath));
app.use('/', express.static(staticPath));
app.use('/login', express.static(staticPath));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  console.dir(err);
  res.status(err.status || 500);
  if(err.status === 500) {
    console.error(err.stack);
    res.json({error: 'Internal Server Error'});
  }
  else if(err.status === 404) {
    res.render('error');    //render error page
  } else {
    res.json({error: err.message})
  }
});

mongoose.connect('mongodb://localhost/api')
        .then(() => console.log("DB connected"))
        .catch(err => console.log(err));


module.exports = app;
