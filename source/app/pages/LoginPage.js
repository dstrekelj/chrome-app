import React from 'react'
import { hashHistory } from 'react-router'

import DataRepository from '../data/DataRepository'

const LoginPageView = (props) => {
    return (
        <div id="login" className="container">
            <h1>Login</h1>
            <p>Please enter your login informations.</p>
            <form id="login-form" onSubmit={props.handleSubmit}>
                <input id="login-form-full-name"
                    type="text"
                    placeholder="Your name"
                    required />
                <input id="login-form-email"
                    type="text"
                    placeholder="Email"
                    required />
                <input id="login-form-password"
                    type="text"
                    placeholder="Password"
                    required />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
        let formElements = event.target.elements
        let user = DataRepository.getUser(0)
        user.fullName = formElements['login-form-full-name'].value
        user.email = formElements['login-form-email'].value
        hashHistory.push('/user/0')
    }

    render() {
        return (
            <LoginPageView handleSubmit={this.handleSubmit} />
        )
    }
}
