// Dependency imports
import React from 'react'
import { Link } from 'react-router'
// App imports
import Messages from '../components/Messages'
import DataRepository from '../data/DataRepository'

/**
 * The Messages page displays all of the messages posted by
 * the user.
 * 
 * @export
 * @class MessagesPage
 * @extends {React.Component}
 */
export default class MessagesPage extends React.Component {
    /**
     * Creates an instance of MessagesPage.
     * 
     * @param {any} props
     * 
     * @memberOf MessagesPage
     */
    constructor(props) {
        super(props)

        this.state = {
            user: DataRepository.getUser(this.props.params.userId)
        }
    }

    /**
     * Renders Messages page.
     * 
     * @returns
     * 
     * @memberOf MessagesPage
     */
    render() {
        return (
            <div className="container full">
                <div className="content">
                    <Link
                        className="navigation"
                        to={`/user/${this.props.params.userId}`}>
                        Back to profile
                    </Link>
                    <Messages messages={this.state.user.messages} />
                </div>
            </div>
        )
    }
}
