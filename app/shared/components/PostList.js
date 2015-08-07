import React from 'react';
import Remarkable from 'remarkable';

const markdown = new Remarkable();

export default React.createClass({
    propTypes: {
        posts: React.PropTypes.array.isRequired,
    },
    getInitialState() {
        return {
            posts: this.props.posts,
        };
    },
    render() {
        const createPost = (post, index) => {
            return (
                <div key={index}>
                    <h2>{post.title}</h2>
                    <div dangerouslySetInnerHTML={{
                        __html: markdown.render(post.body),
                    }}/>
                </div>
            );
        };
        return (
            <div>
                {this.state.posts.map(createPost)}
            </div>
        );
    },
});
