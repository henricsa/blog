import React from 'react';
import Router from 'react-router';
const routes = require('../../shared/routes');

module.exports = (path, isAuthenticated, posts) => {
    return new Promise((resolve, reject) => {
        Router.create({
            routes: routes,
            location: path,
            onAbort: (abortReason) => {
                if (abortReason.constructor.name === 'Redirect') {
                    reject({
                        path: this.makePath(abortReason.to, abortReason.params, abortReason.query),
                    });
                }
            },
        }).run((Root, state) => {
            state.routes.forEach((route) => {
                if (route.handler.authenticate && !isAuthenticated) {
                    reject({
                        path: '/login',
                    });
                }
            });
            resolve(React.renderToString(<Root posts={posts}/>));
        });
    });
};
