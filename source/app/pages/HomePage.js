import React from 'react'
import { Link } from 'react-router'

import MessageInput from '../components/MessageInput'
import Messages from '../components/Messages'

import DataRepository from '../data/DataRepository'

const HomePageView = (props) => {
    return (
        <div id="home" className="container">
            <h1>{props.user.fullName}</h1>
            <h2>{props.user.email}</h2>
            <MessageInput handleSubmitMessage={props.handleSubmitMessage} />
            <Messages messages={props.user.messages} limit={5} />
            <Link to={`/user/${props.params.userId}/messages`}>All messages</Link>
        </div>
    )
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

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
