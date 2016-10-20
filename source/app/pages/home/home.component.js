import React from 'react'
import { Link } from 'react-router'

import Messages from '../../components/messages.component'

export default (props) => {
    return (
        <div>
            <div>
                <h1>John Doe</h1>
                <h2>john.doe@mail.com</h2>
            </div>
            <div>
                <form>
                    <textarea placeholder="Your message" />
                    <button type="submit">Submit</button>
                    <span>500 characters left</span>
                </form>
            </div>
            <Messages messages={props.messages} />
            <div>
                <Link to="/messages">All messages -></Link>
            </div>
        </div>
    )
}
