'use strict';

import React from 'react';
import Router from 'react-router';
var blogRoutes = require('../components/blogRoutes');

module.exports = function (path, posts) {
    return new Promise(function (resolve, reject) {
        Router.create({
            routes: blogRoutes,
            location: path,
            onAbort: function (abortReason) {
                if (abortReason.constructor.name === 'Redirect') {
                    reject({path: this.makePath(abortReason.to, abortReason.params, abortReason.query)});
                }
            }
        }).run((Root) => {
            resolve(React.renderToString(<Root posts={posts} />));
        });
    });
};
