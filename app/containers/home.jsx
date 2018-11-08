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
    const { dispatch } = this.props
    dispatch(getDigestsFromRemote(0))
  }

  render() {
    const { digests } = this.props
    return (
      <div className='ui two column grid'>
        <MainFrameComponent digests={digests} />
        {/* <TimeLine /> */}
      </div>
    )
  }
}

Home.propTypes = {
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
    digests
  }
}

export default withRouter(connect(mapStateToProps)(Home))
