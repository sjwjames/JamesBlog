import fetch from 'cross-fetch'

export const FETCHING_DIGESTS = 'FETCHING_DIGESTS'
export const DIGESTS_RECEIVED = 'DIGESTS_RECEIVED'
export const DIGESTS_UNRECEIVED = 'DIGESTS_UNRECEIVED'
export const SELECT_DIGEST = 'SELECT_DIGEST'

function fetchingDigests() {
    return {
        type: FETCHING_DIGESTS
    }
}

function receivedDigests(data) {
    //todo 创建中间件对收发请求进行包装和解包以及格式化处理
    return {
        type: DIGESTS_RECEIVED,
        digests: data
    };
}

function unReceivedDigests(err) {
    //触发提示 暂时用alert代替 后续创建中间件对收发请求进行包装和解包以及格式化处理
    // window.alert(err.msg);
    //read from local storage
    return {
        type: DIGESTS_UNRECEIVED,
        digests: [
            {
                'id': -1,
                'digest':'Oops，好像没收到母星来的信息',
                'title': '404',
                'tags':[],
                'createdAt':1517414400000,
                'lastModified':1517414400000,
            }
        ]
    };
}

function fetchDigests() {
    return (dispatch) => {
        dispatch(fetchingDigests())
        return fetch(`http://localhost:3000/api/v1/home/digests`)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.json());
                }
                return res.json();
            })
            .then(data => dispatch(receivedDigests(data)))
            .catch(err => dispatch(unReceivedDigests(err)))
    }
}

export function getDigestsFromRemote() {
    return (dispatch) => {
        return dispatch(fetchDigests())
    }
}