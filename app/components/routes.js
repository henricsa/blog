import React from 'react';
import {Route, DefaultRoute} from 'react-router';
var Blog = require('./Blog');
var BlogList = require('./BlogList');
var Login = require('./Login');
var Admin = require('./Admin');
var AdminPost = require('./AdminPost');

module.exports = (
  <Route handler={Blog}>
    <DefaultRoute handler={BlogList} />
    <Route path="login" handler={Login} />
    <Route path="admin">
        <DefaultRoute handler={Admin} />
        <Route path="post" handler={AdminPost} />
    </Route>
  </Route>
);
