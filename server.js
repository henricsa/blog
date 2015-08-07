require('babel-core/register');

const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const favicon = require('koa-favicon');
const router = require('koa-router')();
const passport = require('koa-passport');

const app = koa();
app.use(logger());
app.use(serve(__dirname + '/public'));
app.use(favicon());
app.use(bodyParser());

require('./app/server/middlewares/views')(app);
require('./app/server/middlewares/session')(app);
require('./app/server/middlewares/auth')(app, passport);

require('./app/server/controllers/auth')(router, passport);
require('./app/server/controllers/post')(router);
require('./app/server/controllers/render')(router);

app.use(router.routes());
app.listen(3000);
