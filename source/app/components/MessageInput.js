import React from 'react'

const MessageInputView = (props) => {
    return (
        <form id="message-input-form" onSubmit={props.handleSubmit}>
            <textarea id="message-input-form-text"
                placeholder="Your message"
                onChange={props.handleOnChange}
                maxLength={props.limit}
                required></textarea>
            <div>
                <button type="submit">Submit</button>
                <span>{props.remainingCharacters} characters left</span>
            </div>
        </form>
    )
}

export default class MessageInput extends React.Component {
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)

        this.state = {
            remainingCharacters: this.props.limit
        }
    }

    handleSubmit(event) {
        event.preventDefault()
        let textarea = event.target.elements['message-input-form-text']
        this.props.handleSubmitMessage(textarea.value)
        this.setState({
            remainingCharacters: this.props.limit
        })
        textarea.value = ''
    }

    handleOnChange(event) {
        this.setState({
            remainingCharacters: this.props.limit - event.target.value.length
        })
    }

    render() {
        return <MessageInputView handleSubmit={this.handleSubmit}
            handleOnChange={this.handleOnChange}
            limit={this.props.limit}
            remainingCharacters={this.state.remainingCharacters} />
    }
}
