import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDigestsFromRemote } from '../skeleton/actions/digestActions'
import MainFrameComponent from '../components/mainFrame/mainFrameComponent'
import TimeLine from '../components/timeLine/timeLine'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

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
    return (
      <div className='ui two column grid'>
        <MainFrameComponent digests={this.props.digests} />
        {/* <TimeLine /> */}
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

  return {
    digests,
    selectedColumn: (!selectedColumn || selectedColumn === {}) ? defaultColumn : selectedColumn
  }
}

export default withRouter(connect(mapStateToProps)(Home))
