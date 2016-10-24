import React from 'react'
import { Link } from 'react-router'

import Electron from 'electron'

import ImageEdit from '../components/ImageEdit'
import UserInfo from '../components/UserInfo'
import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'

import DataRepository from '../data/DataRepository'

const HomePageView = (props) => {
    return (
        <div className="wrapper">
            <div className="container full">
                <ImageEdit type="cover"
                    url={props.user.imageCover} />
                <div className="content home">
                    <ImageEdit type="profile"
                        url={props.user.imageProfile} />
                    <UserInfo fullName={props.user.fullName}
                        email={props.user.email} />
                    <MessageInput limit={500}
                        handleSubmitMessage={props.handleSubmitMessage} />
                    <Messages messages={props.user.messages}
                        limit={5} />
                    <Link className="navigation"
                        to={`/user/${props.params.userId}/messages`}>
                        All messages
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        let window = Electron.remote.getCurrentWindow()
        window.setSize(920, 920)
        window.center()

        this.handleSubmitMessage = this.handleSubmitMessage.bind(this)

        this.state = {
            user: DataRepository.getUser(this.props.params.userId)
        }
    }

    handleSubmitMessage(message) {
        let user = this.state.user;
        user.messages.unshift(message);

        this.setState({user: user})
    }

    render() {
        return <HomePageView params={this.props.params}
            user={this.state.user}
            handleSubmitMessage={this.handleSubmitMessage} />
    }
}
