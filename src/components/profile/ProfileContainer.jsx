import React from 'react';
import { addPost, getUsersProfile, getStatusProfile, getUpdateStatus } from '../../reducer/profile_reducer'
import { updateNewPostText } from '../../reducer/profile_reducer'
import { Profile } from './Profile';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { WithAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileComponent extends React.Component {

  componentDidMount() {
    let Id = this.props.match.params.userId;
    if (!Id) {
      Id = 18550;
    };
    this.props.getUsersProfile(Id)
    this.props.getStatusProfile(Id)
  }

  render() {
    return (
      <Profile
        {...this.props}
        status={this.props.Status}
      />
    )
  }
}

let mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.MyProfile.PostData,
    inputState: state.ProfilePage.MyProfile.inputState,
    photo: state.ProfilePage.MyProfile.personalInformation.photo,
    name: state.ProfilePage.MyProfile.personalInformation.name,
    aboutMe: state.ProfilePage.MyProfile.personalInformation.aboutMe,
    isAuth: state.AuthReducer.isAuth,
    Status: state.ProfilePage.MyProfile.personalInformation.Status,
  }
}

export const ProfileContainer = compose(
  connect(mapStateToProps,
    {
      getUsersProfile,
      updateNewPostText,
      addPost,
      getStatusProfile,
      getUpdateStatus,
    }
  ),
  withRouter,
  WithAuthRedirect
)(ProfileComponent);

