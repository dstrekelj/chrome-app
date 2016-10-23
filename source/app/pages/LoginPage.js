import React from 'react'
import { hashHistory } from 'react-router'
import fs from 'fs'

import DataRepository from '../data/DataRepository'

const LoginPageView = (props) => {
    return (
        <div className="wrapper center">
            <div className="container">
                <form id="form-login"
                    name="login"
                    onSubmit={props.handleSubmit}>
                    <h1>Login</h1>
                    <p>Please enter your login informations.</p>
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
                    <button className="green"
                        type="submit">
                        Login
                    </button>
                </form>
            </div>
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
