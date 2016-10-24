// Dependency imports
import React, { PropTypes } from 'react'

const propTypes = {
    handleSubmitMessage: PropTypes.func.isRequired,
    limit: PropTypes.number.isRequired
}

/**
 * The MessageInput component is a form with a single input
 * element in the form of <textarea>. The number of
 * characters which can be written in the input is limited.
 * The submitted text counts as a new message in the user's
 * message feed.
 * 
 * @export
 * @class MessageInput
 * @extends {React.Component}
 */
export default class MessageInput extends React.Component {
    /**
     * Creates an instance of MessageInput.
     * 
     * @param {any} props
     * 
     * @memberOf MessageInput
     */
    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleOnChange = this.handleOnChange.bind(this)

        this.state = {
            remainingCharacters: this.props.limit
        }
    }

    /**
     * Handles submission of new message. The submission
     * triggers the parent element's `handleSubmitMessage()`
     * method, which is a required prop, and provides it
     * with the submitted message.
     * 
     * @param {Event} event
     * 
     * @memberOf MessageInput
     */
    handleSubmit(event) {
        event.preventDefault()
        let textarea = event.target.elements['form-new-message-text']
        this.props.handleSubmitMessage(textarea.value)
        this.setState({
            remainingCharacters: this.props.limit
        })
        textarea.value = ''
    }

    /**
     * Handles change to <textarea> value and updates the
     * remaining character count accordingly.
     * 
     * @param {Event} event
     * 
     * @memberOf MessageInput
     */
    handleOnChange(event) {
        this.setState({
            remainingCharacters: this.props.limit - event.target.value.length
        })
    }

    /**
     * Renders MessageInput component.
     * 
     * @returns
     * 
     * @memberOf MessageInput
     */
    render() {
        return (
            <form
                id="form-new-message"
                name="new-message"
                onSubmit={this.handleSubmit}>
                <textarea
                    id="form-new-message-text"
                    rows="8"
                    placeholder="Your message"
                    onChange={this.handleOnChange}
                    maxLength={this.props.limit}
                    required>
                </textarea>
                <div>
                    <button
                        className="green"
                        type="submit">
                        Submit
                    </button>
                    <span>{this.state.remainingCharacters} characters left</span>
                </div>
            </form>
        )
    }
}

MessageInput.propTypes = propTypes
