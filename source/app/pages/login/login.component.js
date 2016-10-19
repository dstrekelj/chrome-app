import React from 'react'

export default (props) => {
    return (
        <div>
            <h1>Login</h1>
            <p>Please enter your login informations.</p>
            <form onSubmit={props.pHandleSubmit}>
                <input id="login-full-name" type="text" placeholder="Your name" value={props.pFullName} />
                <input id="login-email" type="text" placeholder="Email" value={props.pEmail} />
                <input id="login-password" type="text" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
