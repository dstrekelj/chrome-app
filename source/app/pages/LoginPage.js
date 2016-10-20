import React from 'react'
import { hashHistory } from 'react-router'

import UserData from '../data/UserData'

const LoginPageView = (props) => {
    return (
        <div id="login" className="container">
            <h1>Login</h1>
            <p>Please enter your login informations.</p>
            <form id="login-form" onSubmit={props.handleSubmit}>
                <input id="login-form-full-name"
                    type="text"
                    placeholder="Your name" />
                <input id="login-form-email"
                    type="text"
                    placeholder="Email" />
                <input id="login-form-password"
                    type="text"
                    placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default class LoginPage extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)

        this.state = {
            user: UserData
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let formElements = event.target.elements;
        this.setState({
            user: {
                fullName: formElements['login-form-full-name'].value,
                email: formElements['login-form-email'].value 
            }
        }, () => hashHistory.push('/user/0'))
    }

    render() {
        return (
            <LoginPageView handleSubmit={this.handleSubmit}
                user={this.state.user} />
        )
    }
}
