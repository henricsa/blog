const User = require('../helpers/db').getCollection('user');

function* create(user) {
    yield User.insert(user);
}

function* getById(id) {
    const user = yield User.findById(id);
    return user;
}

function* getFirst(query) {
    const user = yield User.findOne(query);
    return user;
}

function* remove(query) {
    yield User.remove(query);
}

module.exports = {
    create,
    getById,
    getFirst,
    remove,
};
