import React, { Component } from 'react'
import PropTypes from 'prop-types'
import MainFrameComponent from '../mainFrame/mainFrameComponent'

export default class LiteralComponent extends Component {
    render() {
        const {digests} = this.props;

        return (
            <MainFrameComponent digests={digests} />
        )
    }
}
