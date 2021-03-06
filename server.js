require('babel-core/register');

const koa = require('koa');
const logger = require('koa-logger');
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const favicon = require('koa-favicon');
const passport = require('koa-passport');
const router = require('koa-router')();

const app = module.exports = koa();
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

if (!module.parent) {
    app.listen(3000);
}
