require('babel-core/register');

var koa = require('koa');
var logger = require('koa-logger');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var router = require('koa-router')();
var passport = require('koa-passport');

var app = koa();
app.use(logger());
app.use(serve(__dirname + '/public'));
app.use(bodyParser());

require('./app/server/middlewares/views')(app);
require('./app/server/middlewares/session')(app);
require('./app/server/middlewares/auth')(app, passport);

require('./app/server/controllers/auth')(router, passport);
require('./app/server/controllers/post')(router);
require('./app/server/controllers/render')(router);

app.use(router.routes());
app.listen(3000);
