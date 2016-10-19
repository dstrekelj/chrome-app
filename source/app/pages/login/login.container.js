import React from 'react'
import { hashHistory } from 'react-router'

import Login from './login.component'

export default class LoginContainer extends React.Component {
    handleSubmit(event) {
        event.preventDefault()
        let formElements = event.target.elements;
        this.setState({
            fullName: formElements['login-full-name'].value,
            email: formElements['login-email'].value
        }, () => { hashHistory.push('/home') })
    }

    render() {
        return (
            <Login pHandleSubmit={this.handleSubmit.bind(this)} />
        )
    }
}
