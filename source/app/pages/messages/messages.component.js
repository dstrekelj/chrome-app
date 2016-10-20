import React from 'react'
import { Link } from 'react-router'

import Messages from '../../components/messages.component'

export default (props) => {
    return (
        <div>
            <Link to="/home">Back to profile</Link>
            <Messages messages={props.messages} />
        </div>
    )
}
