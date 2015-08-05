var passport = require('./auth');
var post = require('./db').getCoCollection('post');
var reactHtml = require('./reactHtml');

module.exports = {
    blog: function *() {
        try {
            var initialPosts = yield post.find({});
            var blogHtml = yield reactHtml(this.req.url, this.isAuthenticated(), initialPosts);
            yield this.render('index', {
                blogHtml: blogHtml,
                blogPosts: JSON.stringify(initialPosts)
            });
        } catch (err) {
            if (err.path) {
                this.redirect(err.path);
            } else {
                throw err;
            }
        }
    },
    blogPost: function *() {
        yield post.insert(this.request.body);
        this.body = 201;
    },
    isLoggedIn: function *() {
        if (!this.isAuthenticated()) {
            this.throw(401);
        }
        this.status = 200;
    },
    logout: function *() {
        this.logout();
        this.redirect('/');
    }
};
