import { FETCHING_DIGESTS, DIGESTS_RECEIVED, DIGESTS_UNRECEIVED, SELECT_DIGEST } from '../actions/digestActions'

export function allDigests(state = {}, action) {
    switch (action.type) {
        case FETCHING_DIGESTS:
            return Object.assign({}, state, {
                [action.category]: {
                    isFetching: true,
                    data: []
                }
            })
        case DIGESTS_RECEIVED:
            return Object.assign({}, state, {
                [action.category]: {
                    isFetching: false,
                    data: action.digests
                }
            })
        case DIGESTS_UNRECEIVED:
            return Object.assign({}, state, {
                [action.category]: {
                    isFetching: false,
                    data: action.digests
                }
            })
        default:
            return state
    }
}