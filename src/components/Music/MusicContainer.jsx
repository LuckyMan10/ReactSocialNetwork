import {Music} from './Music';
import { connect } from 'react-redux';
import { serachSend, searchChange } from '../../reducer/music-reducer'

export const MusicComponent = (props) => {
    let search = (e) => {
    let text = e.target.value;
    props.searchChange(text)
    }
    return (
        <Music 
        {...props}
        musicSearch={props.musicSearch}
        search={search}
        searchChange={props.searchChange}
        />
    )
}

let mapStateToProps = (state) => {
    return {
    musicSearch: state.MusicReducer.searchMusic,
    serachChange: state.MusicReducer.serachChange,
    }
}

export const MusicContainer = connect(mapStateToProps, {
    serachSend,
    searchChange,
})(MusicComponent)

