import React from 'react'

const Message = (props) => {
    return (
        <div className="message">
            <p>{props.message}</p>
            <hr/>
        </div>
    )
}

export default (props) => {
    return (
        <div className="messages">
            {props.messages.slice(0, props.limit).map((v, i) => <Message key={i} message={v} />)}
        </div>
    )
}
