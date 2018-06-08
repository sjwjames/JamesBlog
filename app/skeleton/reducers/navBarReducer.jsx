import { FETCHING_COLUMNS, COLUMN_RECEIVED, COLUMN_UNRECEIVED, SELECT_COLUMN } from '../actions/navBarActions'

export function navBarColumns(state = {}, action) {
  switch (action.type) {
    case FETCHING_COLUMNS:
      return Object.assign({}, state, {
        navbarDataState: {
          isFetching: true,
          columns: []
        }
      })
      break;
    case COLUMN_RECEIVED:
      return Object.assign({}, state, {
        navbarDataState: {
          isFetching: false,
          columns: action.columns
        }
      })
      break;
    case COLUMN_UNRECEIVED:
      return Object.assign({}, state, {
        navbarDataState: {
          isFetching: false,
          columns: action.columns
        }
      })
      break;
    default:
      return state
  }
}

export function selectedColumn(state = {}, action) {
  switch (action.type) {
    case SELECT_COLUMN:
      return action.column
    default:
      return state
  }
}