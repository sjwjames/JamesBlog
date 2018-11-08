import { FETCHING_POST, POST_RECEIVED, POST_UNRECEIVED } from '../actions/postActions'

export function currentPost(state = {}, action) {
    switch (action.type) {
        case FETCHING_POST:
            return Object.assign({}, state, {
                isFetching: true,
                data:{}
            })
        case POST_RECEIVED:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.data
            })
        case POST_UNRECEIVED:
            return Object.assign({}, state, {
                isFetching: true,
                data: {}
            })
        default:
            return state
    }
}