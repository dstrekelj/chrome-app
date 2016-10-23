import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import MessagesPage from './pages/MessagesPage'

require('./assets/styles/app.scss')

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={LoginPage}/>
            <Route path="/user/:userId" component={HomePage}/>
            <Route path="/user/:userId/messages" component={MessagesPage}/>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
