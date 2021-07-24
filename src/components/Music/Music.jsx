import React from 'react';
import style from './Music.module.scss';
import search_img from '../../image/search.png';
export const Music = (props) => {
    return (
        <div className={style.music}>
            <div className={style.music__header}>
                <h2>Music</h2>
                <div className={style.header__search}>
                    <button className={style.spotify__to_login}>
                    Login to spotify
                    </button>                
                </div>
            </div>
        </div>
    )
};