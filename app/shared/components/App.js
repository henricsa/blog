import React from 'react';
import {
    RouteHandler
} from 'react-router';

export default React.createClass({
    render() {
        return (
            <div>
                <div>Under päronträdet</div>
                <RouteHandler {...this.props}/>
            </div>
        );
    },
});
