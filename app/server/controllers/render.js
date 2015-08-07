var Post = require('../models/post');
var renderHtml = require('../helpers/renderHtml');

function* render() {
    try {
        var initialPosts = yield Post.getAll();
        var html = yield renderHtml(this.req.url, this.isAuthenticated(), initialPosts);
        yield this.render('index', {
            html: html,
            posts: JSON.stringify(initialPosts)
        });
    } catch (err) {
        if (err.path) {
            this.redirect(err.path);
        } else {
            throw err;
        }
    }
}

module.exports = function(router) {
    router.all('*', render);
};
