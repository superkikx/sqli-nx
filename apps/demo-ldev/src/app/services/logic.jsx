import {ActionTypes} from'./facade'

export const engine = action =>{

    switch (action.type) {
    
        case ActionTypes.NAVIGATE:
            return;
        case ActionTypes.TRACK_SEARCH:
            return;
        case ActionTypes.TRACK_SELECT:
            return;
        case ActionTypes.TRACK_GET_LIST:
            return;
               
    }
}