const User = require('../helpers/db').getCollection('user');

function* getById(id) {
    const user = yield User.findById(id);
    return user;
}
function* getFirst(query) {
    const user = yield User.findOne(query);
    return user;
}

module.exports = {
    getById,
    getFirst,
};
