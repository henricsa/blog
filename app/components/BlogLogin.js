'use strict';

var React = require('react');

module.exports = React.createClass({
    getInitialState: function () {
        return {username: '', password: ''};
    },
    handleUsernameChange: function(event) {
        this.setState({username: event.target.value});
    },
    handlePasswordChange: function(event) {
        this.setState({password: event.target.value});
    },
    login: function() {

    },
    render: function() {
        return (
            <form role="form">
                <div>
                    <input type="text" value={this.state.username} onChange={this.handleUsernameChange} />
                    <input type="password" value={this.state.password} onChange={this.handlePasswordChange} />
                </div>
                <button type="submit" onClick={this.login}>Submit</button>
            </form>
        );
    }
});
