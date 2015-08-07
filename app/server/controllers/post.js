const Post = require('../models/post');

function* create() {
    yield Post.create(this.request.body);
    this.status = 201;
}

module.exports = (router) => {
    router.post('/api/post', create);
};
