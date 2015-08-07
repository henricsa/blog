var Post = require('../helpers/db').getCollection('post');

module.exports = {
    create: function*(post) {
        yield Post.insert(post);
    },
    getAll: function*() {
        var post = yield Post.find({});
        return post;
    }
};
