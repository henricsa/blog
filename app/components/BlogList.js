var React = require('react');
import Remarkable from 'remarkable';

var markdown = new Remarkable();

module.exports = React.createClass({
  getInitialState: function () {
    return {posts: this.props.posts};
  },
  render: function() {
    var createPost = (post, index) => {
        return (
            <div key={index}>
                <h2>{post.title}</h2>
                <div dangerouslySetInnerHTML={{__html: markdown.render(post.body)}} />
            </div>
        );
    };
    return (
        <div>
            {this.state.posts.map(createPost)}
        </div>
    );
  }
});
