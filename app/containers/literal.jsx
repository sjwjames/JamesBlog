import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { getColumnsFromRemote } from '../skeleton/actions/homeActions'
import LiteralComponent from '../components/literal/literalComponent'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

class Literal extends Component {
  constructor(props) {
    super(props)
  }

  componentWillMount() {
    // const { dispatch } = this.props
    // dispatch(getColumnsFromRemote())
  }

  // componentDidMount() {
  //   const { dispatch } = this.props
  //   dispatch(getColumnsFromRemote())
  // }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.selectedSubreddit !== this.props.selectedSubreddit) {
  //     const { dispatch, selectedSubreddit } = nextProps
  //     dispatch(fetchPostsIfNeeded(selectedSubreddit))
  //   }
  // }

  render() {
    // const { columns, isFetching } = this.props
    return (
      <LiteralComponent/>
    )
  }
}

Literal.propTypes = {
//   columns: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       route: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired
//     })
//   ).isRequired,
//   isFetching: PropTypes.bool.isRequired,
//   dispatch: PropTypes.func.isRequired
}

const mapStateToProps = state => {
//   const { navbarDataState } = state.default
//   const { columns, isFetching } = navbarDataState || {
//     columns: [],
//     isFetching: true
//   }
  return {
      
  }
}

export default withRouter(connect(mapStateToProps)(Literal))
