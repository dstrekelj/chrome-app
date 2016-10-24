// Dependency imports
import React, { PropTypes } from 'react'

const propTypes = {
    fullName: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
}

const UserInfo = (props) => {
    return (
        <div className="user-info">
            <h1>{props.fullName}</h1>
            <p>{props.email}</p>
        </div>
    )
}

UserInfo.propTypes = propTypes

export default UserInfo
