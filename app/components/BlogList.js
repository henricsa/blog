'use strict';

var React = require('react');

module.exports = React.createClass({
  getInitialState: function () {
    return {posts: this.props.posts};
  },
  render: function() {
    return (
        <div>
            <h2>{this.state.posts[0].title}</h2>
            <div>{this.state.posts[0].body}</div>
        </div>
    );
  }
});
