const Post = require('../models/post');
const renderHtml = require('../helpers/renderHtml');

function handleRenderError(error, redirect) {
    if (error.path) {
        redirect(error.path);
    } else {
        throw error;
    }
}

function* render() {
    try {
        const initialPosts = yield Post.get({});
        const html = yield renderHtml(this.req.url, this.isAuthenticated(), initialPosts);
        yield this.render('index', {
            html,
            posts: JSON.stringify(initialPosts),
        });
    } catch (err) {
        handleRenderError(err, (path) => this.redirect(path));
    }
}

module.exports = (router) => {
    router.all('*', render);
};
