const Post = require('../helpers/db').getCollection('post');

function* create(post) {
    yield Post.insert(post);
}

function* getAll() {
    const post = yield Post.find({});
    return post;
}

module.exports = {
    create,
    getAll,
};
