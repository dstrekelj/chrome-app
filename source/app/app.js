import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Login from './pages/login/login.container'
import Home from './pages/home/home.container'
import Messages from './pages/messages/messages.container'

const App = () => {
    return (
        <Router history={hashHistory}>
            <Route path="/" component={Login}/>
            <Route path="/home" component={Home}/>
            <Route path="/messages" component={Messages}/>
        </Router>
    )
}

ReactDOM.render(<App />, document.getElementById('app'))
