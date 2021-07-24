import React from 'react';
import logo_user from '../image/logo_user.png';
import styles from './user_post.module.scss';

export const User_post = (props) => {

  return (
    <div className={styles.UserProfile_post}>
      <div className={styles.post__content}>
        <div className={styles.post__wrapper}>
          <div className={styles.post__image}>
            <img width="50" src={props.photo != null ? props.photo : logo_user}></img>
          </div>
          <div className={styles.User_name}>
            <p>{props.username_post}</p>
          </div>
        </div>
        <div className={styles.post__text}>
          <p>{props.text_post}</p>
        </div>
        <div className={styles.post__like_dislike}>
          <div className={styles.wrapper_btn_like}>
            <button className={styles.Like}>Like</button>
            <p>{props.like}</p>
          </div>
          <div className={styles.wrapper_btn_dislike}>
            <button className={styles.Dislike}>Dislike</button>
            <p>{props.dislike}</p>
          </div>
        </div>
      </div>
    </div>
  )
}