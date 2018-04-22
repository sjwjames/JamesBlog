import { FETCHING_COLUMNS, COLUMN_RECEIVED, COLUMN_UNRECEIVED } from '../actions/navBarActions'

export default function getColumns(state = {
  navbarDataState: {
    isFetching: true,
    columns: []
  }
}, action) {
  switch (action.type) {
    case FETCHING_COLUMNS:
      return Object.assign({}, state, {
        navbarDataState: {
          isFetching: true,
          columns: []
        }
      })
    case COLUMN_RECEIVED:
      return Object.assign({}, state, {
        navbarDataState: {
          isFetching: false,
          columns: action.columns
        }
      })
    case COLUMN_UNRECEIVED:
      return Object.assign({}, state, {
        navbarDataState: {
          isFetching: false,
          columns: action.columns //todo 获取本地columns
        }
      })
    default:
      return state
  }
}