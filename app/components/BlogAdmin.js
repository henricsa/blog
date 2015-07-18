'use strict';

var React = require('react');
var http = require('superAgent');

module.exports = React.createClass({
    statics: {
        willTransitionTo: function (transition, params, query, callback) {
            http.get('/api/isLoggedIn').end((err, res) => {
                if (err) {
                    transition.redirect('/login');
                }
                callback();
            });
        }
    },
    getInitialState: function () {
        return {posts: this.props.posts};
    },
    render: function() {
        return (
            <div>
                <h2>YAYAYAYAYAY</h2>
            </div>
        );
    }
});
