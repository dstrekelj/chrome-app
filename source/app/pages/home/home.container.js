import React from 'react'
import { hashHistory } from 'react-router'

import Home from './home.component'

export default class LoginContainer extends React.Component {
    render() {
        return (
            <Home messages={["hello", "world"]} />
        )
    }
}
