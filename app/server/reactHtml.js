import React from 'react';
import Router from 'react-router';
var routes = require('../components/routes');

module.exports = function (path, isAuthenticated, posts) {
    return new Promise(function (resolve, reject) {
        Router.create({
            routes: routes,
            location: path,
            onAbort: function (abortReason) {
                if (abortReason.constructor.name === 'Redirect') {
                    reject({path: this.makePath(abortReason.to, abortReason.params, abortReason.query)});
                }
            }
        }).run((Root, state) => {
            state.routes.forEach((route) => {
                if (route.handler.authenticate && !isAuthenticated) {
                    reject({path: '/login'});
                }
            });
            resolve(React.renderToString(<Root posts={posts} />));
        });
    });
};
