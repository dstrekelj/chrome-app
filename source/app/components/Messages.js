// Dependency imports
import React, { PropTypes } from 'react'

const propTypes = {
    messages: PropTypes.arrayOf(PropTypes.string).isRequired
}

const Message = (props) => {
    return (
        <li>{props.message}</li>
    )
}

const Messages = (props) => {
    return (
        <ul className="ul-messages">
            {props.messages.slice(0, props.limit).map((v, i) => <Message key={i} message={v} />)}
        </ul>
    )
}

Messages.propTypes = propTypes

export default Messages
