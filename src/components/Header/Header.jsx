import React from 'react';
import logo from '../image/Logo.png';
import styles from './Header.module.css';

const Header = () => {
    return (
        <div className={styles.Header}>
        <img width="70" src={logo} className={styles.Header__logo}></img>
        </div>
    )
}

export default Header;