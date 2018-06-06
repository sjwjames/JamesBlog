import React, { Component } from 'react'
import { connect } from 'react-redux'
import SidebarComponent from '../components/sidebar/sidebarComponent'
import PropTypes from 'prop-types'

class Sidebar extends Component {
    render() {

        return (
            <SidebarComponent />
        )
    }
}

Sidebar.propTypes = {

}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(Sidebar)