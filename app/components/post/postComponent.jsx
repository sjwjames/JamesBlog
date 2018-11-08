import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import Delta from 'quill-delta'

export default class PostComponent extends Component {
    render() {
        const {postData} = this.props
        const postContent = new Delta(postData.data?postData.data.data:[])
        return (
            <div className="ui grid">
                <div className="ui three wide column dividing rail">
                    <div className="ui segment">
                        Left Rail Content
                    </div>
                </div>
                <ReactQuill className="thirteen wide column" value={postContent} readOnly={true} modules={{toolbar:false}}/>
            </div>
        )
    }
}