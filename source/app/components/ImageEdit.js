import React, { PropTypes } from 'react'
import { remote } from 'electron'
import path from 'path'
import fs from 'fs'
import mime from 'mime'

const openDialogOptions = {
    title: 'Select an image',
    filters: [
        { name: 'Images', extensions: [ 'jpg', 'jpeg', 'png', 'bmp' ] }
    ],
    properties: [ 'openFile' ]
}

const propTypes = {
    type: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    handleImageChange: PropTypes.func.isRequired
}

const ImageEditView = (props) => {
    return (
        <div className={`image-edit ${props.type}`}>
            <img src={props.url} />
            <button onClick={props.handleOnClick} />
        </div>
    )
}

export default class ImageEdit extends React.Component {
    constructor(props) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    handleOnClick() {
        let window = remote.getCurrentWindow()
        remote.dialog.showOpenDialog(
            window,
            openDialogOptions,
            (fileNames) => {
                let filePath = path.resolve(fileNames[0])
                fs.readFile(
                    filePath,
                    'base64',
                    (err, data) => {
                        if (err) throw err
                        let fileMime = mime.lookup(filePath)
                        let fileData = `data:${fileMime};base64,${data}`
                        this.props.handleImageChange(this.props.type, fileData)
                    }
                )
            }
        )
    }

    render() {
        return (
            <ImageEditView
                type={this.props.type}
                url={this.props.url}
                handleOnClick={this.handleOnClick}
            />
        )
    }
}

ImageEdit.propTypes = propTypes
