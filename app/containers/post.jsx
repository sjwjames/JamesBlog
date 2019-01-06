import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import PostComponent from '../components/post/postComponent'
import { withRouter } from 'react-router-dom'
import { getPostFromRemote } from '../skeleton/actions/postActions'

class MyPost extends Component{
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { dispatch } = this.props
        const postId = this.props.match.params.id*1
        dispatch(getPostFromRemote(postId))
    }

    render() {
        const {postData} = this.props
        const postId = this.props.match.params.id*1
        return (
            <div>
                <PostComponent postData={postData} id={postId}/>
            </div>
        )
    }
}

const mapStateToProps = state => {
    const { currentPost } = state
    var post = {
        isFetching: false,
        data: currentPost.data
    };

    return {
        postData:post
    }
}

export default withRouter(connect(mapStateToProps)(MyPost))