import React, { Component } from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import { Link } from 'react-router-dom'
import 'react-quill/dist/quill.snow.css'
import ReactQuill from 'react-quill'
import Delta from 'quill-delta'
import './digestCard.less'

export default class DigestCardComponent extends Component {
    render() {
        const { digest } = this.props;
        var tags;
        const postContent = new Delta(digest.content?digest.content:[])
        if (digest.tags && digest.tags.length) {
            tags =
                <div className="extra content">
                    <div className='ui tag labels'>
                        {digest.tags.map((tag, index) =>
                            <a className='ui label' key={index}>
                                {tag}
                            </a>
                        )}
                    </div>
                </div>
        }
        return (
            <Link className="ui card" key={digest.id} to={{
                pathname: "/post/"+digest.id
            }}>
                <div className="content">
                    {/* <div className="header">{digest.title}</div> */}
                    <div className="meta">{moment(digest.updated_at).format('YYYY-MM-DD HH:mm:ss')}</div>
                    <div className="description">
                    <ReactQuill className="digest-content-box" value={postContent} readOnly={true} modules={{toolbar:false}}/>
                    </div>
                </div>
                {tags}
            </Link>
        )
    }
}
