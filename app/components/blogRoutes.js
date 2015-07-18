import React from 'react';
import {Route, DefaultRoute} from 'react-router';
var BlogApp = require('./BlogApp');
var BlogList = require('./BlogList');
var BlogLogin = require('./BlogLogin');
var BlogAdmin = require('./BlogAdmin');

module.exports = (
  <Route handler={BlogApp}>
    <Route path="admin" handler={BlogAdmin} />
    <Route path="login" handler={BlogLogin} />
    <DefaultRoute handler={BlogList} />
  </Route>
);
