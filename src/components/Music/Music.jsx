import React from 'react';
import style from './Music.module.scss';
import search_img from '../../image/search.png';
import {Login} from '../Music/LoginToSpotify';

export const Music = (props) => {
    return (
        <div className={style.music}>
            <div className={style.music__header}>
                <h2>Music</h2>
                <Login />
                <div className={style.header__search}>
                    <input value={props.musicSearch} onChange={props.search}></input>
                    <button onClick={props.musicSearched} className={style.search_button}>
                    <img width='25' src={search_img}></img>
                    </button>                
                </div>
            </div>
        </div>
    )
};