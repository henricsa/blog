var Post = require('../models/post');

function* create() {
    yield Post.create(this.request.body);
    this.body = 201;
}

module.exports = function(router) {
    router.post('/api/post', create);
};
