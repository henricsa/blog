'use strict';

var passport = require('koa-passport');
var post = require('./db').getCoCollection('post');
var reactHtml = require('./reactHtml');

module.exports = {
    blogList: function *() {
        try {
            var initialPosts = yield post.find({});
            var blogHtml = yield reactHtml(this.req.url, initialPosts);
            yield this.render('index', {
                blogHtml: blogHtml,
                blogPosts: JSON.stringify(initialPosts)
            });
        } catch (err) {
            if (err.path) {
                this.redirect(err.path);
            }
        }
    },
    isLoggedIn: function *() {
        if (!this.isAuthenticated()) {
            this.throw(401);
        }
        this.status = 200;
    },
    login: function () {

    }
};
