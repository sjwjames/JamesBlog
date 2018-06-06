import React, { Component } from 'react'
import { connect } from 'react-redux'
import TimeLineComponent from '../components/timeLine/timeLineComponent'
import PropTypes from 'prop-types'

class TimeLine extends Component {
    render() {
        return (
            <TimeLineComponent />
        )
    }
}

TimeLine.propTypes = {

}

const mapStateToProps = state => {

}

export default connect(mapStateToProps)(TimeLine)