import axios from 'axios'

export const FETCH_LYRICS_START = 'FETCH_LYRICS_START'
export const FETCH_LYRICS_FAILED = 'FETCH_LYRICS_FAILED'
export const FETCH_LYRICS_SUCCESS = 'FETCH_LYRICS_SUCCESS'

export const getLyrics = (artistInput, titleInput) => {
    return (dispatch => {
        dispatch({type: FETCH_LYRICS_START})
        axios.get(`https://api.lyrics.ovh/v1/${artistInput}/${titleInput}`)
            .then((res)=> {
                console.log(res.data)
                dispatch({type: FETCH_LYRICS_SUCCESS, payload:res.data.lyrics})
            })
            .catch((err)=> {
                dispatch({type: FETCH_LYRICS_FAILED})
            })
    })
}