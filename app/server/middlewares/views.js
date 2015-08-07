const views = require('koa-views');

module.exports = (app) => {
    app.use(views('../views', {
        map: {
            html: 'ejs',
        },
    }));
};
