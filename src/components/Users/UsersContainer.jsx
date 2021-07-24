import { connect } from 'react-redux';
import React from 'react';
import { setUsersAC } from '../../reducer/Users_reducer';
import { setCurrentPage } from '../../reducer/Users_reducer';
import { setTotalCount, forthChangeAC, breakChangeAC, setFetching, followInProgress, getUsers, follow, unFollow } from '../../reducer/Users_reducer';
import { Users } from './Users';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class UsersAPIComponent extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    };
    loadUsers() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }
    forth = () => {
        this.props.forthChangeAC();
        this.loadUsers();
    }
    break = () => {
        if (this.props.firstNum != 0) {
            this.props.breakChangeAC();
            this.loadUsers();
        };


    };
    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize)
    };
    render() {

        return (
            <Users
                followInProgress={this.props.followInProgress}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                UsersData={this.props.UsersData}
                firstNum={this.props.firstNum}
                secondNum={this.props.secondNum}
                onPageChanged={this.onPageChanged}
                currentPage={this.props.currentPage}
                forth={this.forth}
                break={this.break}
                isFetching={this.props.isFetching}
                isFollowing={this.props.isFollowing}
                follow={this.props.follow}
                unFollow={this.props.unFollow}
            />
        )
    }
}

let mapStateToProps = (state) => {

    return {
        isFollowing: state.UsersReducer.isFollowing,
        UsersData: state.UsersReducer.UsersData,
        limit: state.UsersReducer.limit,
        pageSize: state.UsersReducer.pageSize,
        totalUsersCount: state.UsersReducer.totalUsersCount,
        currentPage: state.UsersReducer.currentPage,
        secondNum: state.UsersReducer.secondNum,
        firstNum: state.UsersReducer.firstNum,
        isFetching: state.UsersReducer.isFetching,
        isAuth: state.AuthReducer.isAuth,
    };
};

export const UsersContainer = compose(
    connect(mapStateToProps, {
        followInProgress,
        setFetching,
        forthChangeAC,
        breakChangeAC,
        setTotalCount,
        setCurrentPage,
        setUsersAC,
        getUsers,
        follow,
        unFollow,
    }),
    WithAuthRedirect
)(UsersAPIComponent);