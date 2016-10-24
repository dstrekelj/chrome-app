// Dependency imports
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

/**
 * The ImageEdit component is a compound component. It
 * consists of an image (which can be changed / edited) and
 * a button (which triggers a dialog for selecting a new
 * image).
 * 
 * @export
 * @class ImageEdit
 * @extends {React.Component}
 */
export default class ImageEdit extends React.Component {
    /**
     * Creates an instance of ImageEdit.
     * 
     * @param {any} props
     * 
     * @memberOf ImageEdit
     */
    constructor(props) {
        super(props)

        this.handleOnClick = this.handleOnClick.bind(this);
    }

    /**
     * Handles edit button click. Opens a dialog for
     * selecting a new image file to be base64 encoded and
     * used by the application. Triggers a call to the
     * parent component's `handleImageChange()` method,
     * which provides the parent with the ImageEdit
     * component type, and the new image file data.
     * 
     * @memberOf ImageEdit
     */
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

    /**
     * Renders ImageEdit component.
     * 
     * @returns
     * 
     * @memberOf ImageEdit
     */
    render() {
        return (
            <div className={`image-edit ${this.props.type}`}>
                <img src={this.props.url} />
                <button onClick={this.handleOnClick} />
            </div>
        )
    }
}

ImageEdit.propTypes = propTypes
