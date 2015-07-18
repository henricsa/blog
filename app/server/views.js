'use strict';

var views = require('koa-views');

module.exports = function () {
    return views('../../views', {
        map: {
            html: 'ejs'
        }
    });
};
