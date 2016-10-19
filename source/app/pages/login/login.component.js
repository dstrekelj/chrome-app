import React from 'react'

export default (props) => {
    return (
        <div>
            <h1>Login</h1>
            <p>Please enter your login informations.</p>
            <form>
                <input type="text" placeholder="Your name" />
                <input type="text" placeholder="Email" />
                <input type="text" placeholder="Password" />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}
