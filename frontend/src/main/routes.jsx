/** We created this component to configure the targeting of the pages 
 * arranged in the menu, so if the user tries to access any option 
 * other than the one described in the menu, it will always 
 * be directed to the main page */
import React from 'react'
import { Router, Route, Redirect, hashHistory } from 'react-router'

import Todo from '../todo/todo'
import About from '../about/about'

export default props => (
    <Router history={hashHistory}>
        <Route path='/todos' component={Todo} />
        <Route path='/about' component={About} />
        <Redirect from='*' to='/todos' />
    </Router>
)