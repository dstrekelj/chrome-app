import React from 'react'
import { Link } from 'react-router'

import Messages from '../components/Messages'

import UserData from '../data/UserData'

const HomePageView = (props) => {
    return (
        <div id="home" className="container">
            <h1>{props.user.fullName}</h1>
            <h2>{props.user.email}</h2>
            <Messages messages={props.user.messages} limit={5} />
            <Link to={`/user/${props.params.userId}/messages`}>All messages</Link>
        </div>
    )
}

export default class HomePage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            user: UserData
        }
    }

    render() {
        return <HomePageView params={this.props.params}
            user={this.state.user} />
    }
}
