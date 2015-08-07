var config = require('./config').getEnvConfig();
var db = require('monk')(config.mongoUrl);
var wrap = require('co-monk');

module.exports = {
    getCollection: (collection) => {
        return wrap(db.get(collection));
    }
};
