import './index.css';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './redux_store';

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App
      dispatch={store.dispatch.bind(store)}
      state={store.getState()}
      friends_leftBlock__data={store.getState().friends_leftBlock.friends_leftBlock__data}
      PostData={store.getState().ProfilePage.PostData}
      messageData={store.getState().dialogsPage}
      inputState = {store.getState().ProfilePage.inputState}
      messages = {store.getState().dialogsPage.messages}
      store = {store}
      />
    </React.StrictMode>,
    document.getElementById('root')
  )

}

rerender(store.getState());

store.subscribe(rerender)


reportWebVitals();
