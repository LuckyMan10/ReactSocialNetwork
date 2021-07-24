import React from 'react';
import styles from './Menu.module.scss';
import { NavLink } from 'react-router-dom';

const FriendsItem = (state) => {

  return (
    <div>
      <div className={styles.Friends_1}>
        <img src={state.image}></img>
        <p>{state.name}</p>
      </div>
    </div>
  )
}



export class Menu extends React.Component {

  render() {
    return (

      <div className={styles.main_left}>
        <ul className={styles.main_left__list}>
          <li><NavLink to="/Profile" activeClassName={styles.active}>Profile</NavLink></li>
          <li><NavLink to="/Users" activeClassName={styles.active}>Users</NavLink></li>
          <li><NavLink to="/Messages" activeClassName={styles.active}>Messages</NavLink></li>
          <li><NavLink to="/News" activeClassName={styles.active}>News</NavLink></li>
          <li><NavLink to="/Music" activeClassName={styles.active}>Music</NavLink></li>
          <li className={styles.settings}><NavLink to="/settings" activeClassName={styles.active}>Settings</NavLink></li>
          <li><NavLink to="/Login" activeClassName={styles.active}>
            {this.props.isAuth === false ? <p>Login</p> : <p onClick={this.props.logoutSession}>Logout</p>}
          </NavLink></li>
        </ul>
        <div className={styles.main_left__Friends}>
          <p className={styles.Friends__header}>Friends</p>
          <div className={styles.Friends__block}>
            {this.props.friends_leftBlock__data.map(p => <FriendsItem image={p.image} name={p.name} />)}
          </div>
        </div>
      </div>
    )
  }
}


