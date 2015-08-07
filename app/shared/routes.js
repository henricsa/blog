import React from 'react';
import {
    Route,
    DefaultRoute
} from 'react-router';
import App from './components/App';
import PostList from './components/PostList';
import Login from './components/Login';
import Admin from './components/Admin';
import CreatePost from './components/CreatePost';

export default (
    <Route handler={App}>
        <DefaultRoute handler={PostList}/>
        <Route handler={Login} path="login"/>
        <Route path="admin">
            <DefaultRoute handler={Admin}/>
            <Route handler={CreatePost} path="post"/>
        </Route>
    </Route>
);
