const session = require('koa-session');

module.exports = function hej(app) {
    app.keys = ['hemlis'];
    app.use(session({
        maxAge: 1000 * 60 * 60,
    }, app));
};
