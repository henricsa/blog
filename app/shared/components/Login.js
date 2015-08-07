import React from 'react';

export default React.createClass({
    getInitialState() {
        return {
            username: '',
            password: '',
        };
    },
    render() {
        return (
            <form action="/api/login" method="POST" role="form">
                <div>
                    <input name="username" onChange={this.handleUsernameChange} type="text" value={this.state.username}/>
                    <input name="password" onChange={this.handlePasswordChange} type="password" value={this.state.password}/>
                </div>
                <button type="submit">Logga in</button>
            </form>
        );
    },
    handleUsernameChange(event) {
        this.setState({
            username: event.target.value,
        });
    },
    handlePasswordChange(event) {
        this.setState({
            password: event.target.value,
        });
    },
});
