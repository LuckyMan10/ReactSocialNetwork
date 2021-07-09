import React from 'react';
import styles from './main_left.module.css';
import { NavLink } from 'react-router-dom';
const FriendsItem = (props) => {
  return (
    <div>
      <div className={styles.Friends_1}>
        <img src={props.image}></img>
        <p>{props.name}</p>
      </div>
    </div>
  )
}
const Main_left = (props) => {

    let Friend_block = props.friends.map(p => <FriendsItem image={p.image} name={p.name}/>)
    return (
        <div className={styles.main_left}>
        <ul className={styles.main_left__list}>
          <li><NavLink to="/Profile" activeClassName={styles.active}>Profile</NavLink></li>
          <li><NavLink to="/Messages" activeClassName={styles.active}>Messages</NavLink></li>
          <li><NavLink to="/News" activeClassName={styles.active}>News</NavLink></li>
          <li><NavLink to="/Music" activeClassName={styles.active}>Music</NavLink></li>
          <li className={styles.settings}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
        </ul>
        <div className={styles.main_left__Friends}>
          <p className={styles.Friends__header}>Friends</p>
          <div className={styles.Friends__block}>
            {Friend_block}
          </div>
        </div>
        </div>
    )
}

export default Main_left;