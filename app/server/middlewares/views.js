var views = require('koa-views');

module.exports = function(app) {
    app.use(views('../views', {
        map: {
            html: 'ejs'
        }
    }));
};
