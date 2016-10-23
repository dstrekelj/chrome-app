import React from 'react'

const Message = (props) => {
    return (
        <li>{props.message}</li>
    )
}

export default (props) => {
    return (
        <ul className="ul-messages">
            {props.messages.slice(0, props.limit).map((v, i) => <Message key={i} message={v} />)}
        </ul>
    )
}
