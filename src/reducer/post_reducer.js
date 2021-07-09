const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  PostData: [
    {userName: 'Danil', textPost: 'Сегодня прекрасный день!', like: 12, dislike: 3},
    {userName: 'Danil', textPost: 'Сегодня я пойду гулять', like: 29, dislike: 1},
    {userName: 'Danil', textPost: 'Интересно, где самая вкусная пицца?', like: 21, dislike: 5},
  ],
  inputState: '',
}

const reducer = (state = initialState, action) => {
    
    switch (action.type) {
      case ADD_POST:
        let newPost = {
          userName: 'Danil',
          textPost: state.inputState,
          like: 0,
          dislike: 0,
        };
        state.PostData.push(newPost);
        state.inputState = '';
        return state;
      case UPDATE_NEW_POST_TEXT:
        state.inputState = action.newText;
        return state;
      default:
        return state;
    }
}
export const addPostActionCreator = () => {
  return {
    type: ADD_POST
  }
};

export const updateNewPostTextActionCreator = (text) => {
  return {
    type: UPDATE_NEW_POST_TEXT, newText: text
  };
};
export default reducer;