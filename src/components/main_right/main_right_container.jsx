import React from 'react';
import { addPostActionCreator } from '../../reducer/post_reducer'
import { updateNewPostTextActionCreator } from '../../reducer/post_reducer'
import StoreContext from '../../StoreContext';
import {Main_right} from './main_right';
import { connect } from 'react-redux';

let mapStateToProps = (state) => {
  return {
    PostData: state.ProfilePage.PostData,
    inputState: state.ProfilePage.inputState,
  }
}
let mapDispatchToProps = (dispatch) => {
  return  {
    updateNewPostText: (text)=> {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: ()=> {
      dispatch(addPostActionCreator());
    }
  }
}


const Main_right_Container = connect(mapStateToProps, mapDispatchToProps)(Main_right);


export default Main_right_Container;