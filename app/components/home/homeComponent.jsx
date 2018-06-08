import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainFrameComponent from '../mainFrame/mainFrameComponent'

export default class HomeComponent extends Component {
    render() {
        const { digests } = this.props;

        return (
            <div className='ui two column grid'>
                <MainFrameComponent digests={digests} />
            </div>
        )
    }
}

HomeComponent.propTypes = {
    digests: PropTypes.shape({
        isFetching: PropTypes.bool.isRequired,
        data: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.number.isRequired,
                title: PropTypes.string.isRequired,
                digest: PropTypes.string.isRequired,
                tags: PropTypes.arrayOf(PropTypes.string.isRequired),
                createdAt: PropTypes.number.isRequired,
                lastModified: PropTypes.number.isRequired,
            })
        ).isRequired
    })
}