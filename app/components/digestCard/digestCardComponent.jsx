import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class DigestCardComponent extends Component {
    render() {
        const { digest } = this.props;
        var tags;
        if (digest.tags&&digest.tags.length) {
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
            <div className="ui card" key={digest.id}>
                <div className="content">
                    <div className="header">{digest.title}</div>
                    <div className="meta">{new Date(digest.lastModified).toString()}</div>
                    <div className="description">
                        <p>{digest.digest}</p>
                    </div>
                </div>
                {tags}
            </div>
        )
    }
}

DigestCardComponent.propTypes = {
    digest: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        digest: PropTypes.string.isRequired,
        tags: PropTypes.arrayOf(PropTypes.string.isRequired),
        createdAt: PropTypes.number.isRequired,
        lastModified: PropTypes.number.isRequired,
    }).isRequired
}