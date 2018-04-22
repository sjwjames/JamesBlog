import fetch from 'cross-fetch'

export const FETCHING_COLUMNS = 'FETCHING_COLUMNS'
export const COLUMN_RECEIVED = 'COLUMN_RECEIVED'
export const COLUMN_UNRECEIVED = 'COLUMN_UNRECEIVED'
export const SELECT_COLUMN = 'SELECT_COLUMN'

function fetchingColumns() {
    return {
        type: FETCHING_COLUMNS
    }
}

function receivedColumns(data) {
    //todo 创建中间件对收发请求进行包装和解包以及格式化处理
    return {
        type: COLUMN_RECEIVED,
        columns: data
    };
}

function unReceivedColumns(err) {
    //触发提示 暂时用alert代替 后续创建中间件对收发请求进行包装和解包以及格式化处理
    window.alert(err.msg);
    //read from local storage
    return {
        type: COLUMN_UNRECEIVED,
        columns: [
            {
                'id': 1,
                'route': '/tech',
                'name': '技术'
            },
            {
                'id': 2,
                'route': '/literal',
                'name': '胡写'
            },
            {
                'id': 3,
                'route': '/transfer',
                'name': '搬运'
            }
        ]
    };
}

function fetchColumns() {
    return (dispatch) => {
        dispatch(fetchingColumns())
        return fetch(`http://localhost:3000/api/v1/blog/categories`)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.json());
                }
                return res.json();
            })
            .then(data => dispatch(receivedColumns(data)))
            .catch(err => dispatch(unReceivedColumns(err)))
    }
}

export function getColumnsFromRemote() {
    return (dispatch) => {
        return dispatch(fetchColumns())
    }
}