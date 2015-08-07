var session = require('koa-session');

module.exports = function(app) {
    app.keys = ['hemlis'];
    app.use(session({
        maxAge: 1000 * 60 * 60
    }, app));
};
