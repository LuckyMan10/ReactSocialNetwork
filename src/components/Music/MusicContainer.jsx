import {Music} from './Music';
import { connect } from 'react-redux';
import { searchChange, searchSend } from '../../reducer/music-reducer'

export const MusicComponent = (props) => {
    let search = (e) => {
        let text = e.target.value;
        props.searchChange(text)

    }

    let musicSearched = () => {
        props.searchSend(props.musicSearch)
    }
    return (
        <Music 
        {...props}
        musicSearch={props.musicSearch}
        search={search}
        musicSearched={musicSearched}
        searchChange={props.searchChange}
        searchSend={props.searchSend}
        />
    )
}

let mapStateToProps = (state) => {
    return {
    musicSearch: state.MusicReducer.searchMusic,
    }
}

export const MusicContainer = connect(mapStateToProps, {
    searchSend,
    searchChange,
})(MusicComponent)

