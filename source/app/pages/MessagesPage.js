import React from 'react'
import { Link } from 'react-router'

import Messages from '../components/Messages'

import DataRepository from '../data/DataRepository'

const MessagesPageView = (props) => {
    return (
        <div>
            <Link to={`/user/${props.params.userId}`}>Back to profile</Link>
            <Messages messages={props.user.messages} />
        </div>
    )
}

export default class MessagesPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: DataRepository.getUser(this.props.params.userId)
        }
    }

    render() {
        return (
            <MessagesPageView params={this.props.params}
                user={this.state.user} />
        )
    }
}
