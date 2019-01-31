import fetch from 'cross-fetch'

export const FETCHING_ARCHIVES = 'FETCHING_ARCHIVES'
export const ARCHIVES_RECEIVED = 'ARCHIVES_RECEIVED'
export const ARCHIVES_UNRECEIVED = 'ARCHIVES_UNRECEIVED'

import getApiPath from './actionBase'
const MODULE_PATH = (getApiPath() + `/blog/timeline`)  

function fetchingArchives(category) {
    return {
        type: FETCHING_ARCHIVES,
        category
    }
}

function archivesReceived(data, category) {
    return {
        type: ARCHIVES_RECEIVED,
        archives: data.data,
        category
    };
}

function archivesUnrecieved(err, category) {
    return {
        type: ARCHIVES_UNRECEIVED,
        archives: [],
        category
    }
}

function fetchArchives(category) {
    return (dispatch) => {
        dispatch(fetchingArchives(category))
        return fetch(MODULE_PATH+'?category='+category)
            .then(res => {
                if (res.status >= 400) {
                    throw new Error(res.json());
                }
                return res.json();
            })
            .then(data => dispatch(archivesReceived(data, category)))
            .catch(err => dispatch(archivesUnrecieved(err, category)))
    }
}

export function getArchives(category) {
    return (dispatch) => {
        return dispatch(fetchArchives(category))
    }
}