import fetch from 'cross-fetch'

export const FETCHING_POST = 'FETCHING_POST'
export const POST_RECEIVED = 'POST_RECEIVED'
export const POST_UNRECEIVED = 'POST_UNRECEIVED'

function fetchingPost(id) {
    return {
        type: FETCHING_POST,
        id
    }
}

function receivedPost(data, id) {
    //todo 创建中间件对收发请求进行包装和解包以及格式化处理
    return {
        type: POST_RECEIVED,
        data: data[0]||{},
        id
    };
}

function unReceivedPost(err, id) {
    //触发提示 暂时用alert代替 后续创建中间件对收发请求进行包装和解包以及格式化处理
    // window.alert(err.msg);
    //read from local storage
    return {
        type: POST_UNRECEIVED,
        data: {
            ops: [
                {
                    insert: "Ooooops!$0$ NOT FOUND!"
                }
            ]
        },
        id
    };
}

function fetchPost(id) {
    return (dispatch) => {
        dispatch(fetchingPost(id))
        return fetch(`http://localhost:3000/api/v1/post?id=` + id)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.json());
                }
                return res.json();
            })
            .then(data => dispatch(receivedPost(data, id)))
            .catch(err => dispatch(unReceivedPost(err, id)))
    }
}

export function getPostFromRemote(id) {
    return (dispatch) => {
        return dispatch(fetchPost(id))
    }
}