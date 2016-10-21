import React from 'react'

const MessageInputView = (props) => {
    return (
        <form id="message-input-form" onSubmit={props.handleSubmit}>
            <textarea id="message-input-form-text" maxLength="100" required></textarea>
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
        let textarea = event.target.elements['message-input-form-text']
        this.props.handleSubmitMessage(textarea.value)
        textarea.value = ''
    }

    render() {
        return <MessageInputView handleSubmit={this.handleSubmit} />
    }
}
