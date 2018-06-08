import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDigestsFromRemote } from '../skeleton/actions/homeActions'
import HomeComponent from '../components/home/homeComponent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    const { dispatch } = this.props
    dispatch(getDigestsFromRemote())
  }

  render() {
    const { digests } = this.props
    return (
      <HomeComponent digests={digests} />
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
  const { homeDigests } = state
  const { digests } = homeDigests || {
    digests: {
      isFetching: false,
      data: []
    }
  }
  return {
    digests
  }
}

export default withRouter(connect(mapStateToProps)(Home))
