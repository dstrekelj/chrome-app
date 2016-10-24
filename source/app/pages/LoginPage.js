// Dependency imports
import React, { PropTypes } from 'react'
import { hashHistory } from 'react-router'
// App imports
import DataRepository from '../data/DataRepository'

/**
 * The Login page is the application entry point. Login
 * credentials are used to identify the application user,
 * and the provided data is stored in the data repository.
 * 
 * Login credentials include full name, email, and password.
 * While all fields are required, only the email field is
 * validated.
 * 
 * Successful login navigates to the user's own Home page.
 * 
 * @export
 * @class LoginPage
 * @extends {React.Component}
 */
export default class LoginPage extends React.Component {
    /**
     * Creates an instance of LoginPage.
     * 
     * @param {any} props
     * 
     * @memberOf LoginPage
     */
    constructor(props) {
        super(props)
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    /**
     * Handles login form submission. The submitted user data is
     * stored in the user object handled by the data repository.
     * Afterwards, the app navigates to the user's Home page.
     * 
     * @param {any} event
     * 
     * @memberOf LoginPage
     */
    handleSubmit(event) {
        event.preventDefault()
        let formElements = event.target.elements
        let user = DataRepository.getUser(0)
        user.fullName = formElements['login-form-full-name'].value
        user.email = formElements['login-form-email'].value
        hashHistory.push('/user/0')
    }

    /**
     * Renders Login page.
     * 
     * @returns
     * 
     * @memberOf LoginPage
     */
    render() {
        return (
            <div className="wrapper center">
                <div className="container">
                    <form id="form-login"
                        name="login"
                        onSubmit={this.handleSubmit}>
                        <h1>Login</h1>
                        <p>Please enter your login informations.</p>
                        <input id="login-form-full-name"
                            type="text"
                            placeholder="Your name"
                            required />
                        <input id="login-form-email"
                            type="email"
                            pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
                            placeholder="Email"
                            required />
                        <input id="login-form-password"
                            type="password"
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
}
