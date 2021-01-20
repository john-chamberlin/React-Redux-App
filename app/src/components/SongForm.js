import React, {useState} from 'react'
import {connect} from 'react-redux'
import {getLyrics} from '../actions/index'

import '../App.css'



const SongForm = (props) => {
    const [titleInput, setTitleInput] = useState('')
    const [artistInput, setArtistInput] = useState('')

    const handleChanges = e => {
        if(e.target.placeholder === 'Title') {
            setTitleInput(e.target.value)
        } else {
            setArtistInput(e.target.value)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        props.getLyrics(artistInput, titleInput)
        setTitleInput('')
        setArtistInput('')

    }

    return (
        <form onSubmit={handleSubmit}>
            <h1>Enter a song to show lyrics!</h1>
            <input type='text' name='titleText' placeholder='Title' value={titleInput} onChange={handleChanges}/>
            <input type='text' name='artistText' placeholder='Artist' value={artistInput} onChange={handleChanges}/>
            <button>Get Lyrics!</button>
        </form>
    )
}
const mapStateToProps = (state) => {
    return {
        lyrics: state.lyrics,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, {getLyrics})(SongForm)