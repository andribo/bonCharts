var express = require('express');
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var expressSession = require("express-session");
var passport = require("passport");
var passportLocal = require("passport-local");
var mongodb = require('mongodb');
var encrypt = require('./secure/encrypt');
var routes = require('./routes/index.js');
var path = require('path');
var port = process.env.PORT || 3000;
var db = require('./database/db');
var FacebookStrategy = require('passport-facebook').Strategy;
var TwitterStrategy = require('passport-twitter').Strategy;
var url = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost:27017/Users';

var FACEBOOK_APP_ID = "145452562457437";
var FACEBOOK_APP_SECRET = "5e46e22927a26aa5d529975afed0be43";

var app = express();

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
// app.use("/public", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({
  extended: true
})); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());
app.use(expressSession({
  secret: process.env.SESSION_SECRET || "secret",
  resave: false,
  saveUninitialized: false
}));
/* init passport middleware*/
app.use(passport.initialize());
app.use(passport.session());
/* Login check */
passport.use(new passportLocal.Strategy(function(username, passport, done) {
  db.checkСorrectness(username, function(err, user) {
    if (user) {
      if (user.passport === encrypt.encrypt(passport)) {
        done(null, {
          id: user.id,
          name: user.name,
          provider: user.provider
        });
      } else {
        done(null, null);
      }
    } else {
      done(null, null);
    }
  });
}));
passport.use(new FacebookStrategy({
    clientID: FACEBOOK_APP_ID,
    clientSecret: FACEBOOK_APP_SECRET,
    callbackURL: "/facebook/callback"
  },
  function(accessToken, refreshToken, profile, done) {
    // asynchronous verification, for effect...
    process.nextTick(function() {
      // To keep the example simple, the user's Facebook profile is returned to
      // represent the logged-in user.  In a typical application, you would want
      // to associate the Facebook account with a user record in your database,
      // and return that user instead.
      console.log("ACCS:"+accessToken);
      var user = {
        accessTokens: accessToken,
        id: profile.id,
        name: profile.displayName,
        provider: profile.provider,
        charts: []
      };
      db.insertUser(user);
      return done(null, user);
    });
  }
));
passport.use(new TwitterStrategy({
    consumerKey: "8D82Yvd3F382igAN8gsCXUtJY",
    consumerSecret: "fZOsXoJ6qveLNqQadTcDhE6cqZZXejaqtO8v0V0rPn0yUBBK6j",
    callbackURL: "/twitter/callback"
  },
  function(token, tokenSecret, profile, cb) {
    // In this example, the user's Twitter profile is supplied as the user
    // record.  In a production-quality application, the Twitter profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    var user = {
      id: profile.id,
      name: profile.displayName,
      provider: profile.provider,
      charts: []
    };
    db.insertUser(user);
    return cb(null, user);
  }));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(obj, done) {
  done(null, obj);
});

app.use('/', routes);

app.listen(port, function() {
  console.log("Listen localhost:3000");
});