import React from 'react'

const MessageInputView = (props) => {
    return (
        <form id="message-input-form" onSubmit={props.handleSubmit}>
            <textarea></textarea>
            <div>
                <button type="submit">Submit</button>
                <span>500 characters left</span>
            </div>
        </form>
    )
}

export default class MessageInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault()
    }

    render() {
        return <MessageInputView handleSubmit={this.handleSubmit} />
    }
}
