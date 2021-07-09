import React from 'react';
import styles from './main_right.module.css';
import User_post from '../User_post/user_post';
import banner from '../image/banner.jpg';
import logo_user from '../image/logo_user.png';
import {addPostActionCreator} from '../../reducer/post_reducer'
import {updateNewPostTextActionCreator} from '../../reducer/post_reducer'
import Main_right_Container from './main_right_container'
const Main_right = (props) => {
  
    let newPostElement = React.createRef();
   
    let onAddPost = () => {
      props.addPost()
      //props.dispatch(addPostActionCreator());
      
    }
    let inputChange = () => {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
      //let action = updateNewPostTextActionCreator(text);
      //props.dispatch(action);
    }
    
    let handleKeyPress = (e) => {
      let handleKeyPressEvent = e.keyCode || e.which;
      if (handleKeyPressEvent === 13) {
        onAddPost();
      }
    }

    let postElements = props.PostData.map(p => <User_post username_post={p.userName} text_post={p.textPost} like={p.like} dislike={p.dislike}/> );
    return (
    <div className={styles.main_right}>
        <div className={styles.main_right__wrapper_content}>
        <div className={styles.main_right__header}>
          <img src={banner} className={styles.main_right__header__logo}></img>
        </div>
        <div className={styles.main_right__userInfo}>
          <div className={styles.userInfo_wrapper}>
          <div className={styles.userInfo__image}>
            <img width="90" src={logo_user}></img>
          </div>
          <div className={styles.userInfo__text}>
            <h3>Имя Фамилия</h3>
            <p>Некоторая персональная информация</p>
          </div>
          </div>
          <div className={styles.userInfo__editInfo}>
            <button className={styles.editInfo__button}>Изменить профиль</button>
          </div>
        </div>
        <div className={styles.main_right__addPost}>
          <div className={styles.addPost__form}>
            <h4>Добавить пост</h4>
            <div className={styles.form__wrapper}>
            <input onKeyPress={handleKeyPress} value={props.inputState} onChange={inputChange} ref={newPostElement} placeholder="Напишите что-нибудь" className={styles.form__text}></input>
            <button onClick={onAddPost} className={styles.form__button}>Отправить</button>
          </div>
          </div>
          </div>
        </div>
        { postElements }
      </div>
    )
}

export default Main_right;