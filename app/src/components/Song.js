import React from 'react'
import {connect} from 'react-redux'
import '../App.css'


const Song = (props) => {

    if(props.isFetching) {
        return <h2>Fetching Lyrics...</h2>
    }
    if (props.lyrics === "") {
        return <h2>{props.error}</h2>
    }

    return (
        <div>
            <p>{props.lyrics}</p>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        lyrics: state.lyrics,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps)(Song)