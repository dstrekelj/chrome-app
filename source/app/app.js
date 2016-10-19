import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Login from './components/Login'
import Home from './components/Home'
import Messages from './components/Messages'

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
