const Post = require('../helpers/db').getCollection('post');

function* create(post) {
    yield Post.insert(post);
}

function* get(query) {
    const post = yield Post.find(query);
    return post;
}

function* remove(query) {
    yield Post.remove(query);
}

module.exports = {
    create,
    get,
    remove,
};
