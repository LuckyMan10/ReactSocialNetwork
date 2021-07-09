import React from 'react';
import {addPostActionCreator} from '../../reducer/post_reducer'
import {updateNewPostTextActionCreator} from '../../reducer/post_reducer'
import Main_right from './main_right';
const Main_right_Container = (props) => {
    let state = props.store.getState();

    let addPost = () => {
      //props.addPost()
      props.store.dispatch(addPostActionCreator());
      
    }
    let inputChange = (text) => {
      let action = updateNewPostTextActionCreator(text);
      props.store.dispatch(action);
    }
    

    return (
    <Main_right
    updateNewPostText={inputChange}
    addPost={addPost}
    PostData={state.ProfilePage.PostData}
    inputState={state.ProfilePage.inputState}/>
    )
}

export default Main_right_Container;