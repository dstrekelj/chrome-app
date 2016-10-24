// Dependency imports
import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'
// App imports
import LoginPage from './pages/LoginPage'
import HomePage from './pages/HomePage'
import MessagesPage from './pages/MessagesPage'

// Include global stylesheet
require('./assets/styles/app.scss')

const App = () => {
    return (
        <Router onUpdate={()=> window.scrollTo(0, 0)} history={hashHistory}>
            <Route path="/" component={LoginPage}/>
            <Route path="/user/:userId" component={HomePage}/>
            <Route path="/user/:userId/messages" component={MessagesPage}/>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
