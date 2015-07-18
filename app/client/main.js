'use strict';

var React = require('react');
var Router = require('react-router');
var BlogApp = require('../components/BlogApp');
var blogRoutes = require('../components/blogRoutes');

var mountNode = document.getElementById('react-main-mount');

Router.run(blogRoutes, Router.HistoryLocation, (Root) => {
  React.render(<Root posts={blog.posts} />, mountNode);
});
