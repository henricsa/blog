import React from 'react';
import http from 'superAgent';

export default React.createClass({
    statics: {
        authenticate: true,
    },
    getInitialState() {
        return {
            title: '',
            body: '',
        };
    },
    render() {
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
    },
    handleTitleChange(event) {
        this.setState({
            title: event.target.value,
        });
    },
    handleBodyChange(event) {
        this.setState({
            body: event.target.value,
        });
    },
    handleSubmit(event) {
        event.preventDefault();
        http.post('/api/post').send({
            title: this.state.title,
            body: this.state.body,
        }).end();
    },
});
