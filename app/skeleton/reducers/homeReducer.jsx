import { FETCHING_DIGESTS, DIGESTS_RECEIVED, DIGESTS_UNRECEIVED, SELECT_DIGEST } from '../actions/homeActions'

export function homeDigests(state = {}, action) {
    switch (action.type) {
        case FETCHING_DIGESTS:
            return Object.assign({}, state, {
                digests: {
                    isFetching: true,
                    data: []
                }
            })
        case DIGESTS_RECEIVED:
            return Object.assign({}, state, {
                digests: {
                    isFetching: false,
                    data: action.digests
                }
            })
        case DIGESTS_UNRECEIVED:
            return Object.assign({}, state, {
                digests: {
                    isFetching: false,
                    data: action.digests
                }
            })
        default:
            return state
    }
}

// export function selectedColumn(state = {}, action) {
//     switch (action.type) {
//       case SELECT_COLUMN:
//         return action.column
//       default:
//         return state
//     }
//   }