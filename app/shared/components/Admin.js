import React from 'react';
import {
    Link
} from 'react-router';

export default React.createClass({
    propTypes: {
        posts: React.PropTypes.array.isRequired,
    },
    statics: {
        authenticate: true,
    },
    getInitialState() {
        return {
            posts: this.props.posts,
        };
    },
    render() {
        const createItem = (post, index) => {
            return (
                <li key={index}>
                    <Link to="/admin">{post.title}</Link>
                </li>
            );
        };
        return (
            <div>
                <h2>YAYAYAYAYAY</h2>
                <Link to="/admin/post">Ny post</Link>
                <ul>{this.state.posts.map(createItem)}</ul>
            </div>
        );
    },
});
