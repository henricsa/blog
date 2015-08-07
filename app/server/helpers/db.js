const config = require('./config').getEnvConfig();
const db = require('monk')(config.mongoUrl);
const wrap = require('co-monk');

module.exports = {
    getCollection: (collection) => {
        return wrap(db.get(collection));
    },
};
