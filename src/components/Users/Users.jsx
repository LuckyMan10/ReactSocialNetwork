import React from 'react';
import styles from './Users.module.scss';
import user_photo from '../image/Users_default.png';
import preloader from '../image/preloader.gif';
import { NavLink } from 'react-router-dom';

export class Users extends React.Component {

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize);
        let pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.Users}>
                <div className={styles.Users__header}>
                    <h2>Users</h2>
                    <div className={styles.header__pages}>
                        <p onClick={this.props.break}>Назад</p>
                        {this.props.isFetching ? <img width="50" src={preloader} /> : pages.slice(this.props.firstNum, this.props.secondNum).map(p => {
                            return (
                                <span onClick={(e) => { this.props.onPageChanged(p) }} className={this.props.currentPage === p && styles.selectedPage}>{p}</span>
                            )
                        })}
                        <p onClick={this.props.forth}>Дальше</p>
                    </div>
                </div>
                {

                    this.props.UsersData.map(el =>

                        <div className={styles.Users__user} key={el.id}>
                            <div className={styles.user__photo_subbutton}>
                                <div className={styles.user_wrapper}>
                                    <NavLink to={{ pathname: `/Profile/${el.id}` }}><img width='90' src={el.photos.small != null ? el.photos.small : user_photo} className={styles.user__photo} />
                                    </NavLink>
                                    {el.followed
                                        ? <button disabled={this.props.isFollowing.some(id => id === el.id)} id={el.id} onClick={() => {
                                            this.props.unFollow(el.id)
                                        }} className={styles.user_subbutton}>Unfollow</button>
                                        : <button disabled={this.props.isFollowing.some(id => id === el.id)} id={el.id} onClick={() => {
                                            this.props.follow(el.id)
                                        }} className={styles.user_subbutton}>Follow</button>

                                    }

                                </div>
                            </div>
                            <div className={styles.user__PersonalInfo}>
                                <div className={styles.PersonalInfo__Name_status}>
                                    <p className={styles.name}>{el.name}</p>
                                    <p>{el.status}</p>
                                </div>
                                <div className={styles.PersonalInfo__Country_city}>
                                    <p>{el.country}</p>
                                    <p>{el.city}</p>
                                </div>
                            </div>
                        </div>

                    )
                }
                <div className={styles.Users__show_more}>
                    <button className={styles.show_more}>
                        Show more
                    </button>
                </div>
            </div>
        )
    }
}
