'use strict';

var config = require('./config');

module.exports = {
    getEnvironemtConfig: function () {
        return config[process.env.NODE_ENV || 'development'];
    }
};
