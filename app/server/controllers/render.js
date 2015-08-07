const Post = require('../models/post');
const renderHtml = require('../helpers/renderHtml');

function* render() {
    try {
        const initialPosts = yield Post.getAll();
        const html = yield renderHtml(this.req.url, this.isAuthenticated(), initialPosts);
        yield this.render('index', {
            html,
            posts: JSON.stringify(initialPosts),
        });
    } catch (err) {
        if (err.path) {
            this.redirect(err.path);
        } else {
            throw err;
        }
    }
}

module.exports = (router) => {
    router.all('*', render);
};
