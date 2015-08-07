import React from 'react';

export default React.createClass({
    getInitialState: function() {
        return {
            username: '',
            password: ''
        };
    },
    handleUsernameChange: function(event) {
        this.setState({
            username: event.target.value
        });
    },
    handlePasswordChange: function(event) {
        this.setState({
            password: event.target.value
        });
    },
    render: function() {
        return (
            <form action="/api/login" method="POST" role="form">
                <div>
                    <input name="username" onChange={this.handleUsernameChange} type="text" value={this.state.username}/>
                    <input name="password" onChange={this.handlePasswordChange} type="password" value={this.state.password}/>
                </div>
                <button type="submit">Logga in</button>
            </form>
        );
    }
});
