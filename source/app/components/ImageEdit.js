import React from 'react'

const ImageEditView = (props) => {
    return (
        <div className={`image-edit ${props.type}`}>
            <img src={props.url} />
            <button />
        </div>
    )
}

export default class ImageEdit extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <ImageEditView type={this.props.type} url={this.props.url} />
        )
    }
}
