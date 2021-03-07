import React, { Component } from 'react';
import { Route, Link, NavLink, Switch } from 'react-router-dom';
import './Blog.css';
// import FullPost from './FullPost/FullPost';
import NewPost from './NewPost/NewPost';
import Posts from './Posts/Posts';

class Blog extends Component {
    render () {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li><NavLink
                                to="/posts"
                                exact
                                activeClassName="my-active"
                                activeStyle={{
                                    color: '#fa923f',
                                    textDecoration: 'underline'
                                }}>Posts</NavLink></li>
                            <li><NavLink to={{
                                // pathname: this.props.match.url + '/new-post',
                                pathname: '/new-post',
                                hash: '#id',
                                search: '?quick-submit=true'
                            }}>New Post</NavLink></li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} /> */}
                {/* <Route path="/" exact component={Posts} /> */}
                <Switch>
                    <Route path="/new-post" component={NewPost} />
                    {/* <Route path="/" component={Posts} /> */}
                    <Route path="/posts" component={Posts} />
                    {/* <Route path="/:id" exact component={FullPost} /> */}
                </Switch>
            </div>
        );
    }
}

export default Blog;