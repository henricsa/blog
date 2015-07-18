'use strict';

require('babel-core/register');

var koa = require('koa');
var serve = require('koa-static');
var logger = require('koa-logger');
var route = require('koa-route');
var session = require('koa-session');
var bodyParser = require('koa-bodyparser');
var routes = require('./app/server/routes');
var views = require('./app/server/views')();
var passport = require('./app/server/auth')();

var app = koa();
app.keys = ['some secret hurr'];
app.use(logger())
   .use(serve(__dirname + '/public'))
   .use(views)
   .use(bodyParser())
   .use(session(app))
   .use(passport.initialize())
   .use(passport.session())
   .use(route.get('/api/isLoggedIn', routes.isLoggedIn))
   .use(route.all('*', routes.blogList))
   .listen(3000);
