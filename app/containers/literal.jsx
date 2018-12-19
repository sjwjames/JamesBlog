import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDigestsFromRemote } from '../skeleton/actions/digestActions'
import LiteralComponent from '../components/literal/literalComponent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Literal extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch, selectedColumn } = this.props
    const category = selectedColumn.id
    dispatch(getDigestsFromRemote(category))
  }

  render() {
    const { digests } = this.props
    return (
      <div className='ui two column grid'>
        <LiteralComponent digests={digests} />
      </div>
    )
  }
}


const mapStateToProps = state => {
  const { allDigests } = state
  const { selectedColumn } = state.router.location.state || {}
  var digests = {
      isFetching: false,
      data: []
  };
  if (selectedColumn) {
      digests = allDigests[selectedColumn.id] || {
          isFetching: false,
          data: []
      }
  }

  return {
      digests,
      selectedColumn
  }
}

export default withRouter(connect(mapStateToProps)(Literal))
