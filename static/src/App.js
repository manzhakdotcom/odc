import React, {Component} from 'react';
import {
    Route,
    Switch,
    withRouter,
    NavLink,
    Link
} from 'react-router-dom';

import {Container} from 'reactstrap'

import PostsList from './components/PostsList';
import PostsCreateUpdate from './components/PostsCreateUpdate';


class App extends Component {
    render() {
        const {history} = this.props;
        return (
            <Container>
                <h1>Hi there!</h1>

                <Switch>
                    <Route history={history} path='/api' exact component={PostsList}/>
                    <Route history={history} path='/api/posts/:pk' component={PostsCreateUpdate}/>
                    <Route history={history} path='/api/posts/' exact component={PostsCreateUpdate}/>
                </Switch>
            </Container>
        );
    }
}

export default withRouter(App);