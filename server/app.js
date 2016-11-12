var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose=require('mongoose');
var routes = require('./routes/index');
var users = require('./routes/users');
var movie=require('./routes/movie');
var Users=require('./models/users');
var app = express();
var connectflash = require('connect-flash');
var passport = require('passport')
 , LocalStrategy = require('passport-local').Strategy;

app.set('views', path.join(__dirname, '../client/dist'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../Client/dist')));

app.use(require('express-session')({ secret: 'keyboard cat', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(connectflash())
// assign the mongoose connection to a variable
mongoose.connect("mongodb://localhost/moviedb");

//verify the connection to a variable
db= mongoose.connection;

//verify the connection status with the database
db.on('error', console.error.bind(console,'connection error.........!!!!!!!'));

db.once('open',function(){
    console.log("connected to MongoDB successfully");
});


app.use('/movie', movie);
app.use('/users', users);

app.post('/login',
 passport.authenticate('local',
 { failureFlash: 'Error',
   succssFlash: 'Success'
}),
 function(req, res) {
   res.json({responseText:'authenticated'});
   console.log("in login");
 });

 app.post('/logout',function(req,res){
   console.log("Session Deleted");
   res.session.destroy();
 });

passport.use(new LocalStrategy(
 function(username, password, done) {
   console.log(username+"    "+password);
   Users.findOne({ 'username': username }, function (err, user) {
     if (err) { return done(err); }
     if (!user) { return done(null, false); }
     console.log("hello");
     if (user.password!=password) { return done(null, false); }
     return done(null, user);
   });
 }
));

passport.serializeUser(function(user, done) {
 done(null, user.id);
});

passport.deserializeUser(function(id, done) {
 Users.findById(id, function (err, user) {
   done(err, user);
 });
});



// error handlers

//catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
 res.send("page not found")
  next(err);
});
// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.send('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.send('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
