import { ActionTypes } from './facade';

const selectedUser = {value:null};
const selectedTrack = {value:null};

const fetchUsers = () => {
    return new Promise( (resolve, reject) => {
        resolve(require('./API/user.json'));
    });
};
const fetchTracks = () => {
    return new Promise( (resolve, reject) => {
        resolve(require('./API/tracks.json'));
    });
};
const searchTrackByName = name => {
    return fetch(API_TRACKS + '?name_like=' + name ).then(res => res.json())
};

export const engine = action => {
    switch (action.type) {
        case ActionTypes.NAVIGATE:
            return Promise.resolve(true);

        case ActionTypes.TRACK_GET_LIST:
            return fetchTracks();

        case ActionTypes.TRACK_SEARCH:
            return searchTrackByName(action.data);

        case ActionTypes.TRACK_SELECT:
            selectedTrack.value = action.data;
            return Promise.resolve(selectedTrack);

        case ActionTypes.USER_GET_LIST:
            return fetchUsers();

        case ActionTypes.USER_SELECT:
            selectedUser.value = action.data;
            return Promise.resolve(selectedUser);
    }
};
