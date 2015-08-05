require('babel-core/register');

var koa = require('koa');
var serve = require('koa-static');
var logger = require('koa-logger');
var router = require('koa-router')();
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var routes = require('./app/server/routes');
var views = require('./app/server/views')();
var passport = require('./app/server/auth')();

var app = koa();
app.proxy = true;
app.keys = ['some secret hurr'];
app.use(logger())
   .use(serve(__dirname + '/public'))
   .use(views)
   .use(bodyParser())
   .use(session({maxage: 1800000}, app))
   .use(passport.initialize())
   .use(passport.session());

   router.get('/api/isLoggedIn', routes.isLoggedIn)
         .get('/api/logout', routes.logout)
         .post('/api/post', routes.blogPost)
         .post('/api/login', passport.authenticate('local', {
                                   successRedirect: '/admin',
                                   failureRedirect: '/login'
                               }))
         .all('*', routes.blog);

app.use(router.routes())
   .listen(3000);
