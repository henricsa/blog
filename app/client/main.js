import React from 'react';
import Router from 'react-router';
import {
    HistoryLocation
} from 'react-router';
import http from 'superAgent';
const routes = require('../shared/routes');

const mountNode = document.getElementById('react-main-mount');

Router.run(routes, HistoryLocation, function callback(Root, state) {
    const render = () => {
        React.render(<Root posts={window.blog.posts}/>, mountNode);
    };
    const authenticateRoutes = state.routes.filter((route) => {
        return route.handler.authenticate;
    });

    if (authenticateRoutes.length > 0) {
        http.get('/api/isLoggedIn').end((err) => {
            if (err) {
                this.transitionTo('/login');
            } else {
                render();
            }
        });
    } else {
        render();
    }
});
