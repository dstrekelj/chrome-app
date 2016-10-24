// Dependency imports
import React from 'react'
import { Link } from 'react-router'
import { remote}  from 'electron'
// App imports
import ImageEdit from '../components/ImageEdit'
import UserInfo from '../components/UserInfo'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'
import DataRepository from '../data/DataRepository'

/**
 * The Home page presents the user's full name and email
 * address, as well as the last five messages he posted.
 * 
 * @export
 * @class HomePage
 * @extends {React.Component}
 */
export default class HomePage extends React.Component {
    /**
     * Creates an instance of HomePage. The window is
     * resized to a larger size, in order to accommodate the
     * Home page design.
     * 
     * @param {any} props
     * 
     * @memberOf HomePage
     */
    constructor(props) {
        super(props)

        let window = remote.getCurrentWindow()
        window.setResizable(true)
        window.setMinimumSize(920, 540)
        window.setSize(920, 920)
        window.center()

        this.handleImageChange = this.handleImageChange.bind(this)
        this.handleSubmitMessage = this.handleSubmitMessage.bind(this)

        this.state = {
            user: DataRepository.getUser(this.props.params.userId)
        }
    }

    /**
     * Handles image change triggered by the ImageEdit
     * component.
     * 
     * @param {String} type ImageEdit type ('profile' or 'cover')  
     * @param {String} url Data URL of new (base64 encoded) image
     * 
     * @memberOf HomePage
     */
    handleImageChange(type, url) {
        let user = this.state.user;
        if (type === 'profile') user.imageProfile = url;
        if (type === 'cover') user.imageCover = url;

        this.setState({ user: user })
    }

    /**
     * Handles the submission of a new message triggered by
     * the MessageInput component.
     * 
     * @param {String} message New message
     * 
     * @memberOf HomePage
     */
    handleSubmitMessage(message) {
        let user = this.state.user;
        user.messages.unshift(message);

        this.setState({ user: user })
    }

    /**
     * Renders the Home page.
     * 
     * @returns
     * 
     * @memberOf HomePage
     */
    render() {
        return (
            <div className="wrapper">
                <div className="container full">
                    <ImageEdit
                        type="cover"
                        url={this.state.user.imageCover}
                        handleImageChange={this.handleImageChange}
                    />
                    <div className="content home">
                        <ImageEdit
                            type="profile"
                            url={this.state.user.imageProfile}
                            handleImageChange={this.handleImageChange}
                        />
                        <UserInfo
                            fullName={this.state.user.fullName}
                            email={this.state.user.email}
                        />
                        <MessageInput
                            limit={500}
                            handleSubmitMessage={this.handleSubmitMessage}
                        />
                        <Messages
                            messages={this.state.user.messages}
                            limit={5}
                        />
                        <Link
                            className="navigation"
                            to={`/user/${this.props.params.userId}/messages`}>
                            All messages
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
