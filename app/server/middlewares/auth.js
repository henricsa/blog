var co = require('co');
var User = require('../models/user');
var LocalStrategy = require('passport-local').Strategy;

function serialize(user, done) {
    done(null, user._id);
}

function deserialize(id, done) {
    co(function*() {
        return yield User.getById(id);
    }).then((user) => {
        done(null, user);
    }).catch((err) => {
        done(err);
    });
}

var strategy = new LocalStrategy(function(username, password, done) {
    co(function*() {
        return yield User.getFirst({
            username: username
        });
    }).then((user) => {
        if (!user) {
            return done(null, false, {
                message: 'Incorrect username.'
            });
        }
        if (user.password !== password) {
            return done(null, false, {
                message: 'Incorrect password.'
            });
        }
        return done(null, user);
    }).catch((err) => {
        if (err) {
            return done(err);
        }
    });
});

module.exports = function(app, passport) {
    passport.serializeUser(serialize);
    passport.deserializeUser(deserialize);
    passport.use(strategy);

    app.use(passport.initialize());
    app.use(passport.session());

    return passport;
};
