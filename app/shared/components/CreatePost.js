import React from 'react';
import http from 'superAgent';

export default React.createClass({
    statics: {
        authenticate: true
    },
    getInitialState: function() {
        return {
            title: '',
            body: ''
        };
    },
    handleTitleChange: function(event) {
        this.setState({
            title: event.target.value
        });
    },
    handleBodyChange: function(event) {
        this.setState({
            body: event.target.value
        });
    },
    handleSubmit: function(event) {
        event.preventDefault();
        http.post('/api/post').send({
            title: this.state.title,
            body: this.state.body
        }).end();
    },
    render: function() {
        return (
            <div>
                <h2>Nytt blogginlägg</h2>
                <form onSubmit={this.handleSubmit} role="form">
                    <div>
                        <input onChange={this.handleTitleChange} type="text" value={this.state.title}/>
                        <textarea onChange={this.handleBodyChange} value={this.state.body}/>
                    </div>
                    <button type="submit">Skapa</button>
                </form>
            </div>
        );
    }
});
