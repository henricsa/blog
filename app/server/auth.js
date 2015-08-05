var passport = require('koa-passport');
var LocalStrategy = require('passport-local').Strategy;
var User = require('./db').getCollection('user');

var serialize = function (user, done) {
  done(null, user._id);
};

var deserialize = function (id, done) {
  User.findById(id, done);
};

var localStrategy = function () {
    return new LocalStrategy(function(username, password, done) {
        User.findOne({ username: username }, function(err, user) {
            if (err) { return done(err); }
            if (!user) {
                return done(null, false, { message: 'Incorrect username.' });
            }
            if (user.password !== password) {
                return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
        });
    });
};

passport.serializeUser(serialize);
passport.deserializeUser(deserialize);
passport.use(localStrategy());

module.exports = function () {
    return passport;
};
