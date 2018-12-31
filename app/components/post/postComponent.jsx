import React, { Component } from 'react'
import PropTypes from 'prop-types'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import Delta from 'quill-delta'
import './post.less'
export default class PostComponent extends Component {
    render() {
        const {postData} = this.props
        const postContent = new Delta((postData.data&&postData.data.content)?postData.data.content:[])
        return (
            <div className="ui container">
                {/* <div className="ui three wide column dividing rail">
                    <div className="ui segment">
                        Left Rail Content
                    </div>
                </div> */}
                <h3 style={{textAlign:'center'}}>{postData.data.title}</h3>
                <ReactQuill className="sixteen wide column post-content-box" value={postContent} readOnly={true} modules={{toolbar:false}}/>
            </div>
        )
    }
}