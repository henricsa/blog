import React from 'react';
var http = require('superAgent');

module.exports = React.createClass({
    statics: {
        authenticate: true
    },
    getInitialState: function () {
        return {title: '', body: ''};
    },
    handleTitleChange: function(event) {
        this.setState({title: event.target.value});
    },
    handleBodyChange: function(event) {
        this.setState({body: event.target.value});
    },
    handleSubmit: function(event) {
        event.preventDefault();
        http.post('/api/post').send({title: this.state.title, body: this.state.body}).end();
    },
    render: function() {
        return (
            <div>
                <h2>Nytt blogginlägg</h2>
                <form role="form" onSubmit={this.handleSubmit}>
                    <div>
                        <input type="text" value={this.state.title} onChange={this.handleTitleChange} />
                        <textarea value={this.state.body} onChange={this.handleBodyChange} />
                    </div>
                    <button type="submit">Skapa</button>
                </form>
            </div>
        );
    }
});
