import React from 'react'

import Message from './message.component'

export default (props) => {
    return (
        <div className="messages">
            {props.messages.map((v, i) => <Message key={i} message={v} />)}
        </div>
    )
}
