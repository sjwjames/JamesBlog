import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDigestsFromRemote } from '../skeleton/actions/digestActions'
import MainFrameComponent from '../components/mainFrame/mainFrameComponent'
import TimeLineComponent from '../components/timeLine/timeLineComponent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch, selectedColumn } = this.props
    if (selectedColumn && selectedColumn.id) {
      dispatch(getDigestsFromRemote(selectedColumn.id))
    }
  }

  componentDidUpdate(prevProps) {
    const { dispatch, selectedColumn } = this.props
    if (prevProps.selectedColumn && !prevProps.selectedColumn.id) {
      if (selectedColumn && selectedColumn.id) {
        dispatch(getDigestsFromRemote(selectedColumn.id))
      }
    }
  }

  render() {
    const { archives, selectedColumn } = this.props
    return (
      <div className='ui two column grid'>
        <MainFrameComponent digests={this.props.digests} />
        <TimeLineComponent archives={archives} category={selectedColumn} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { allDigests } = state
  const { selectedColumn } = state.router.location.state || {}
  var defaultColumn = {}
  var digests = {
    isFetching: false,
    data: []
  };

  if (selectedColumn) {
    digests = allDigests[selectedColumn.id] || {
      isFetching: false,
      data: []
    }
  } else {
    const { navbarDataState } = state.navBarColumns
    if (navbarDataState && !navbarDataState.isFetching) {
      for (var column of navbarDataState.columns) {
        if (column.name === 'Home') {
          defaultColumn = column
        }
      }
    }
    digests = allDigests[defaultColumn.id] || {
      isFetching: false,
      data: []
    }
  }

  let archives = {
    data: [],
    isFetching: true
  }

  if (digests.data.length > 0) {
    archives.data = digests.data.map((item, index) => {
      return {
        category: item.category,
        id: item.id,
        timestamp: moment(item.updated_at)
      }
    })
    archives.isFetching = false
  }

  return {
    digests,
    selectedColumn: (!selectedColumn || selectedColumn === {}) ? defaultColumn : selectedColumn,
    archives
  }
}

export default withRouter(connect(mapStateToProps)(Home))
