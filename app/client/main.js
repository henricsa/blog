import React from 'react';
import Router from 'react-router';
import {
    HistoryLocation
} from 'react-router';
import http from 'superAgent';
var routes = require('../shared/routes');

var mountNode = document.getElementById('react-main-mount');

Router.run(routes, HistoryLocation, function(Root, state) {
    var render = () => {
        React.render(<Root posts={window.blog.posts}/>, mountNode);
    };
    var authenticateRoutes = state.routes.filter((route) => {
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
