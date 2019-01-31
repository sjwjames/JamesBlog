import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getArchives } from '../../skeleton/actions/timeLineActions'
import TimeLineComponent from './timeLineComponent'
import PropTypes from 'prop-types'

class TimeLine extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { dispatch, category } = this.props
        const id = category ? category.id : -1
        dispatch(getArchives(id))
    }

    render() {
        const { archives, category } = this.props
        return (
            <TimeLineComponent archives={archives} category={category} />
        )
    }
}

const mapStateToProps = state => {
    const { timeLine } = state
    const { selectedColumn } = state.router.location.state || {}
    var archives = {
        data: [],
        isFetching: false
    };
    if (selectedColumn) {
        if (timeLine && timeLine.archives) {
            timeLine.archives.map(item => {
                if (item.category === selectedColumn.id) {
                    archives.data = item.data
                    archives.isFetching = true
                }
            })
        }
    }

    return {
        archives,
        category: selectedColumn||{}
    }
}

export default connect(mapStateToProps)(TimeLine)