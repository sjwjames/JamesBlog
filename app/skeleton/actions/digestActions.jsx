import fetch from 'cross-fetch'

export const FETCHING_DIGESTS = 'FETCHING_DIGESTS'
export const DIGESTS_RECEIVED = 'DIGESTS_RECEIVED'
export const DIGESTS_UNRECEIVED = 'DIGESTS_UNRECEIVED'
export const SELECT_DIGEST = 'SELECT_DIGEST'
import getApiPath from './actionBase'
const MODULE_PATH = (getApiPath() + `/post/digests`)

function fetchingDigests(category) {
    return {
        type: FETCHING_DIGESTS,
        category
    }
}

function receivedDigests(data, category) {
    //todo 创建中间件对收发请求进行包装和解包以及格式化处理
    return {
        type: DIGESTS_RECEIVED,
        digests: data,
        category
    };
}

function unReceivedDigests(err, category) {
    //触发提示 暂时用alert代替 后续创建中间件对收发请求进行包装和解包以及格式化处理
    // window.alert(err.msg);
    //read from local storage
    return {
        type: DIGESTS_UNRECEIVED,
        digests: [
            {
                'id': -1,
                'digest': 'Oops，好像没收到母星来的信息',
                'title': '404',
                'tags': [],
                'createdAt': 1517414400000,
                'lastModified': 1517414400000,
                category: -1
            }
        ]
    };
}

function fetchDigests(category) {
    return (dispatch) => {
        dispatch(fetchingDigests(category))
        return fetch(MODULE_PATH + `?category=` + category)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.json());
                }
                return res.json();
            })
            .then(data => dispatch(receivedDigests(data, category)))
            .catch(err => dispatch(unReceivedDigests(err, category)))
    }
}

export function getDigestsFromRemote(category) {
    return (dispatch) => {
        return dispatch(fetchDigests(category))
    }
}