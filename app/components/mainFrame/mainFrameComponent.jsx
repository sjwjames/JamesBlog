import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './mainFrameComponent.less'
import DigestCardComponent from '../digestCard/digestCardComponent'

export default class MainFrameComponent extends Component {
    render() {
        const { digests } = this.props;
        return (
            <div className='twelve wide column'>
                {(() => {
                    if (digests && digests.data && digests.data.length) {
                        return <div className='ui cards one sjwjamesblog-main-frame'>
                            {digests.data.map((digest, index) =>
                                <DigestCardComponent key={digest.id} isFetching={digests.isFetching} digest={digest} />
                            )}
                        </div>
                    } else {
                        return <div className='ui cards one sjwjamesblog-main-frame'></div>;
                    }
                })()}
            </div>
        )
    }
}

MainFrameComponent.propTypes = {
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
};