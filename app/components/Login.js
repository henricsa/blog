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
    render: function() {
        return (
            <form role="form" action="/api/login" method="POST">
                <div>
                    <input type="text" value={this.state.username} name="username" onChange={this.handleUsernameChange} />
                    <input type="password" value={this.state.password} name="password" onChange={this.handlePasswordChange} />
                </div>
                <button type="submit">Logga in</button>
            </form>
        );
    }
});
