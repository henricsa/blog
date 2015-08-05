var config = require('./config').getEnvConfig(),
    monk = require('monk'),
    wrap = require('co-monk');

var db = monk(config.mongoUrl);

module.exports = {
    getCoCollection: (collection) => {
        return wrap(db.get(collection));
    },
    getCollection: (collection) => {
        return db.get(collection);
    },
};
