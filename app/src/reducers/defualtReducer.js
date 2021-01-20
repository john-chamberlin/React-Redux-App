import {FETCH_LYRICS_START, FETCH_LYRICS_FAILED, FETCH_LYRICS_SUCCESS} from '../actions/index'

const initialState = {
    lyrics: null,
    isFetching: false,
    error: 'Error: Failed to retrieve lyrics'
}

export const reducer= (state=initialState, action) => {
    switch(action.type) {
        case(FETCH_LYRICS_START):
            return({...state, isFetching: true})
        case(FETCH_LYRICS_FAILED):
            return({
                ...state, 
                isFetching: false
            })
        case(FETCH_LYRICS_SUCCESS):
            return({
                ...state,
                lyrics: action.payload,
                isFetching: false,
            })
        default: 
            return state
    }
}