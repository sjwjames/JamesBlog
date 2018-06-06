import React, { Component } from 'react'
import { connect } from 'react-redux'
import MainFrameComponent from '../components/mainFrame/mainFrameComponent'
import PropTypes from 'prop-types'

class MainFrame extends Component {
    render() {

        return (
            <MainFrameComponent />
        )
    }
}

MainFrame.propTypes = {

}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(MainFrame)