import React from 'react'

export default (props) => {
    return (
        <div className="user-info">
            <h1>{props.fullName}</h1>
            <p>{props.email}</p>
        </div>
    )
} 
