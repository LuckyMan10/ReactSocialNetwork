import React from 'react';
import styles from './Profile.module.scss';
import {User_post} from '../User_post/user_post';
import banner from '../image/banner.jpg';
import logo_user from '../image/logo_user.png';
import {ProfileStatus} from '../ProfileStatus/ProfileStatus';


export class Profile extends React.Component {
  
   
    onAddPost = () => {
      this.props.addPost()
    }
    inputChange = (e) => {
      let text = e.target.value;
      this.props.updateNewPostText(text);
    }
    changeStatus = (e) => {
      let text = e.target.value;
      this.props.changeNewStatus(text)
    }
    
    handleKeyPress = (e) => {
      let handleKeyPressEvent = e.keyCode || e.which;
      if (handleKeyPressEvent === 13) {
        this.onAddPost();
      }
    }

    render() {
    return (
    <div className={styles.main_right}>
        <div className={styles.main_right__wrapper_content}>
        <div className={styles.main_right__header}>
          <img src={banner} className={styles.main_right__header__logo}></img>
        </div>
        <div className={styles.main_right__userInfo}>
          <div className={styles.userInfo_wrapper}>
          <div className={styles.userInfo__image}>
            <img width="90" src={this.props.photo != null ? this.props.photo : logo_user}></img>
          </div>
          <div className={styles.userInfo__text}>
            <h3>{this.props.name}</h3>
            <p><ProfileStatus getUpdateStatus={this.props.getUpdateStatus} status={this.props.Status} /></p>
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
            <input onKeyPress={this.handleKeyPress} value={this.props.inputState} onChange={this.inputChange} placeholder="Напишите что-нибудь" className={styles.form__text}></input>
            <button onClick={this.onAddPost} className={styles.form__button}>Отправить</button>
          </div>
          </div>
          </div>
        </div>
        { this.props.PostData.map(p => <User_post photo={this.props.photo} username_post={p.userName} text_post={p.textPost} like={p.like} dislike={p.dislike}/> ) }
      </div>
    )
}
}

