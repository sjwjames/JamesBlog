import { FETCHING_ARCHIVES, ARCHIVES_RECEIVED, ARCHIVES_UNRECEIVED } from '../actions/timeLineActions'

export function timeLine(state = {}, action) {
    switch (action.type) {
        case FETCHING_ARCHIVES:
            return Object.assign({}, state, {
                [action.category]: {
                    isFetching: true,
                    archives: []
                }
            })
        case ARCHIVES_RECEIVED:
            return Object.assign({}, state, {
                [action.category]: {
                    isFetching: true,
                    archives: action.archives
                }
            })

        case ARCHIVES_UNRECEIVED:
            return Object.assign({}, state, {
                [action.category]: {
                    isFetching: true,
                    archives: action.archives
                }
            })
        default:
            return state
    }
}
