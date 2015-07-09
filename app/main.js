'use strict';

var React = require('react'),
    BlogApp = require('./components/BlogApp');

var mountNode = document.getElementById('react-main-mount');

React.render(<BlogApp />, mountNode);
