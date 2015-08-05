import React from 'react';
import {Link} from 'react-router';

module.exports = React.createClass({
    statics: {
        authenticate: true
    },
    getInitialState: function () {
        return {posts: this.props.posts};
    },
    render: function() {
        var createItem = (post) => {
            return <li key={post.title}><Link to="/admin">{post.title}</Link></li>;
        };
        return (
            <div>
                <h2>YAYAYAYAYAY</h2>
                <Link to="/admin/post">Ny post</Link>
                <ul>{this.state.posts.map(createItem)}</ul>
            </div>
        );
    }
});
