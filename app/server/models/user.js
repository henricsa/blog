var User = require('../helpers/db').getCollection('user');

module.exports = {
    getById: function*(id) {
        var user = yield User.findById(id);
        return user;
    },
    getFirst: function*(query) {
        var user = yield User.findOne(query);
        return user;
    }
};
